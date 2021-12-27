<?php

    /**
     * @package Wolfsbane Admin Plugin
     */

    class MediaDataRepository extends BaseRepository implements IMediaDataRepository {

        public function getTableName() {
            return BaseRepository::MEDIA_DATA_TABLE_NAME;
        }

        public function getMediaTypeId(int $id): int {            
            try {

                if ($id <= 0)
                    return 0;

                $query = "SELECT `media_type_id` FROM {$this->getTableName()} WHERE `media_data_id` = %d";
                $mediaTypeId = intVal($this->wpdb->get_var($this->wpdb->prepare($query, $id)));

                if (!isset($mediaTypeId))
                    return 0;

                return intval($mediaTypeId);
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }

        public function insert(MediaData $data): ?MediaData {
            try {
                $video = $audio = null;
                $insertDate = $updateDate = current_time('mysql', 1);

                $result = $this->wpdb->insert(
                    $this->getTableName(), 
                    array(
                        'media_type_id'=> $data->getTypeId(),
                        'title'=> $data->getTitle(),
                        'artist'=> $data->getArtist(),
                        'media_location_id'=> $data->getLocationId(),
                        'media_order'=> $data->getOrder(),
                        'insert_date'=> $insertDate,
                        'update_date'=> $updateDate
                    ),
                    array('%d', '%s', '%s', '%d', '%d')
                );

                if ($result === false)
                    return null;

                $mediaDataId = $this->wpdb->insert_id;
                $mediaData = new MediaData(
                    $data->getTypeId(), 
                    $data->getTitle(),
                    $data->getArtist(),
                    $data->getLocationId(),
                    $data->getOrder(),
                    Helper::toDateTimeFromString($insertDate), 
                    Helper::toDateTimeFromString($updateDate),
                    $mediaDataId
                );

                if ($data->getTypeId() === MediaType::YOUTUBE_VIDEO)
                    $mediaData->useVideo($this->insertVideoRow($mediaDataId, $data));

                if ($data->getTypeId() === MediaType::BEATS || $data->getTypeId() === MediaType::SONGS)
                    $mediaData->useAudio($this->insertAudioRow($mediaDataId, $data));

                return $mediaData;
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }

        public function update(MediaData $data): ?MediaData {
            try {
                $video = $audio = null;
                $updateDate = current_time('mysql', 1);
                
                $result = $this->wpdb->update(
                    $this->getTableName(), 
                    array(
                        'title'=> $data->getTitle(),
                        'artist'=> $data->getArtist(),
                        'media_location_id'=> $data->getLocationId(),
                        'media_order'=> $data->getOrder(),
                        'update_date'=> $updateDate
                    ),
                    array(
                        'media_data_id' => $data->getId()
                    ),
                    array(
                        'title' => '%s',
                        'artist' => '%s'
                    ),
                    array('%d')
                );

                if ($result === false)
                    return null;
                
                $mediaData = new MediaData(
                    $data->getTypeId(), 
                    $data->getTitle(),
                    $data->getArtist(),
                    $data->getLocationId(),
                    $data->getOrder(),
                    $data->getInsertDate(), 
                    Helper::toDateTimeFromString($updateDate),
                    $data->getId()
                );

                if ($data->getTypeId() === MediaType::YOUTUBE_VIDEO)
                    $video = $this->updateVideoRow($data->getId(), $data);

                if ($data->getTypeId() === MediaType::BEATS || $data->getTypeId() === MediaType::SONGS)
                    $audio = $this->updateAudioRow($data->getId(), $data);

                return $mediaData;
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }
        
        public function delete(int $id): bool {
            try {

                if ($id <= 0)
                    return false;

                $mediaTypeId = $this->getMediaTypeId($id);

                if ($mediaTypeId <= 0)
                    return false;

                $result = $this->wpdb->delete(
                    $this->getTableName(),
                    array(
                        'media_data_id' => $id
                    ),
                    array('%d')
                );

                if ($result === false)
                    return false;

                
                if ($mediaTypeId === MediaType::YOUTUBE_VIDEO)
                    $this->deleteVideoRow($id);

                if ($mediaTypeId === MediaType::BEATS || $mediaTypeId === MediaType::SONGS)
                    $this->deleteAudioRow($id);
    
                return $result > 0;
            } catch (Exception $e) {
                return false;
            } finally {
                $this->wpdb->flush();
            }
        }
        
        public function getAll(): ?array {
            try {
                $rows = array();
                $result = $this->wpdb->get_results("SELECT * FROM {$this->getTableName()} ORDER BY `media_order` ASC");

                foreach($result as $row) {
                    $id = intVal($row->media_data_id);
                    $typeId = intVal($row->media_type_id);

                    $mediaData = new MediaData(
                        $row->media_type_id, 
                        $row->title,
                        $row->artist,
                        $row->media_location_id,
                        $row->media_order,
                        Helper::toDateTimeFromString($row->insert_date),
                        Helper::toDateTimeFromString($row->update_date),
                        $id
                    );

                    if ($typeId === MediaType::YOUTUBE_VIDEO) {
                        $mediaData->useVideo($this->getVideoRow($id));
                    }

                    if ($typeId === MediaType::BEATS || $typeId === MediaType::SONGS) {
                        $mediaData->useAudio($this->getAudioRow($id));
                    }
                    
                    $rows[] = $mediaData;
                }

                if ($result === null)
                    return null;
    
                return $rows;
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }
        
        public function getAllByType(int $mediaTypeId): ?array {
            try {
                $rows = array();
                $videoResult = null;
                $audioResult = null;

                if ($mediaTypeId <= 0)
                    return null;

                $result = $this->wpdb->get_results("SELECT * FROM {$this->getTableName()} WHERE media_type_id = {$mediaTypeId} ORDER BY `media_order` ASC");

                foreach($result as $row) {
                    $id = intVal($row->media_data_id);
                    $typeId = intVal($row->media_type_id);

                    $mediaData = new MediaData(
                        $typeId, 
                        $row->title,
                        $row->artist,
                        $row->media_location_id,
                        $row->media_order,
                        Helper::toDateTimeFromString($row->insert_date),
                        Helper::toDateTimeFromString($row->update_date),
                        $id
                    );

                    if ($typeId === MediaType::YOUTUBE_VIDEO) {
                        $mediaData->useVideo($this->getVideoRow($id));
                    }

                    if ($typeId === MediaType::BEATS || $typeId === MediaType::SONGS) {
                        $mediaData->useAudio($this->getAudioRow($id));
                    }                    
                    
                    $rows[] = $mediaData;
                }

                if ($result === null)
                    return null;
    
                return $rows;
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }
        
        public function getAllByTypeAndLocation(int $mediaTypeId, int $mediaLocationId): ?array {
            try {
                $rows = array();
                $videoResult = null;
                $audioResult = null;

                if ($mediaTypeId <= 0)
                    return null;

                // print_r("SELECT * FROM {$this->getTableName()} WHERE media_type_id = {$mediaTypeId} AND media_location_id = {$mediaLocationId} ORDER BY `media_order` ASC");

                $result = $this->wpdb->get_results("SELECT * FROM {$this->getTableName()} WHERE media_type_id = {$mediaTypeId} AND media_location_id = {$mediaLocationId} ORDER BY `media_order` ASC");

                foreach($result as $row) {
                    $id = intVal($row->media_data_id);
                    $typeId = intVal($row->media_type_id);

                    $mediaData = new MediaData(
                        $typeId, 
                        $row->title,
                        $row->artist,
                        $row->media_location_id,
                        $row->media_order,
                        Helper::toDateTimeFromString($row->insert_date),
                        Helper::toDateTimeFromString($row->update_date),
                        $id
                    );

                    if ($typeId === MediaType::YOUTUBE_VIDEO) {
                        $mediaData->useVideo($this->getVideoRow($id));
                    }

                    if ($typeId === MediaType::BEATS || $typeId === MediaType::SONGS) {
                        $mediaData->useAudio($this->getAudioRow($id));
                    }                    
                    
                    $rows[] = $mediaData;
                }

                if ($result === null)
                    return null;
    
                return $rows;
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }
        
        public function getById(int $id): ?MediaData {
            try {
                $videoResult = null;
                $audioResult = null;

                if ($id <= 0)
                    return null;

                $query = "SELECT * FROM {$this->getTableName()} WHERE `media_data_id` = %d";
                $row = $this->wpdb->get_row($this->wpdb->prepare($query, $id));


                if ($row === null)
                    return null;

                $id = intVal($row->media_data_id);  
                $typeId = intVal($row->media_type_id);


                $mediaData = new MediaData(
                    $typeId, 
                    $row->title,
                    $row->artist,
                    $row->media_location_id,
                    $row->media_order,
                    Helper::toDateTimeFromString($row->insert_date),
                    Helper::toDateTimeFromString($row->update_date),
                    $id
                );
                if ($typeId === MediaType::YOUTUBE_VIDEO) {
                    $mediaData->useVideo($this->getVideoRow($id));
                }
                if ($typeId === MediaType::BEATS || $typeId === MediaType::SONGS) {
                    $mediaData->useAudio($this->getAudioRow($id));
                }

                return $mediaData;
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }
        
        public function countByDuplicate(string $title, string $artist): ?int {
            try {
                return $this->wpdb->get_var( "SELECT COUNT(*) FROM {$this->getTableName()} WHERE `title` = '$title' AND `artist` = '$artist'") ?? 0;
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }
        
        public function countOrderInstance(int $mediaDataId, int $typeId, int $locationId, int $order): ?int {
            try {
                return $this->wpdb->get_var( "SELECT COUNT(*) FROM {$this->getTableName()} 
                            WHERE `media_type_id` = $typeId AND `media_location_id` = $locationId 
                            AND `media_order` = $order AND `media_data_id` <> $mediaDataId") ?? 0;
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }
        
        public function countLocationInstance(int $locationId): ?int {
            try {
                return $this->wpdb->get_var( "SELECT COUNT(*) FROM {$this->getTableName()} 
                            WHERE `media_location_id` = $locationId") ?? 0;
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }

        private function getVideoRow(int $mediaDataId): ?MediaVideoData {            
            try { 

                if ($mediaDataId <= 0)
                    return null;

                $query = "SELECT * FROM " . BaseRepository::MEDIA_VIDEO_DATA_TABLE_NAME . " WHERE `media_data_id` = %d";
                $row = $this->wpdb->get_row($this->wpdb->prepare($query, $mediaDataId));
    
                if ($row === null)
                    return null;

                return new MediaVideoData(
                    $row->media_data_id,
                    $row->video_url,
                    $row->video_id,
                    Helper::toDateTimeFromString($row->insert_date),
                    Helper::toDateTimeFromString($row->update_date),
                    $row->media_video_data_id,
                );
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }

        private function getAudioRow(int $mediaDataId): ?MediaAudioData {            
            try { 

                if ($mediaDataId <= 0)
                    return null;

                $query = "SELECT * FROM " . BaseRepository::MEDIA_AUDIO_DATA_TABLE_NAME . " WHERE `media_data_id` = %d";
                $row = $this->wpdb->get_row($this->wpdb->prepare($query, $mediaDataId));
    
                if ($row === null)
                    return null;    
                    
                return new MediaAudioData(
                    $row->media_data_id,
                    $row->mp3_filename,
                    $row->ogg_filename,
                    $row->fallback_filename,
                    Helper::toDateTimeFromString($row->insert_date),
                    Helper::toDateTimeFromString($row->update_date),
                    $row->media_audio_data_id,
                );
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }

        private function updateVideoRow(int $mediaDataId, MediaData $media): ?MediaVideoData {
            try {
                if ($media->getTypeId() !== MediaType::YOUTUBE_VIDEO) return null;
                if ($media === null) return null;

                $data = $media->useVideo();
                $updateDate = current_time('mysql', 1);

                if ($data === null)
                    return null;

                $result = $this->wpdb->update(
                    BaseRepository::MEDIA_VIDEO_DATA_TABLE_NAME, 
                    array(
                        'video_url'=> $data->getVideoUrl(),
                        'video_id'=> $data->getVideoId(),
                        'update_date'=> $updateDate
                    ),
                    array(
                        'media_data_id' => $mediaDataId
                    ),
                    array(
                        'video_url' => '%s',
                        'video_id' => '%s',
                        'update_date' => '%s'
                    ),
                    array('%d')
                );

                if ($result === false)
                    return null;

                $data->setUpdateDate(Helper::toDateTimeFromString($updateDate));

                return $data;
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }

        private function updateAudioRow(int $mediaDataId, MediaData $media): ?MediaAudioData {
            try {
                if ($media->getTypeId() !== MediaType::BEATS && $media->getTypeId() !== MediaType::SONGS) return null;
                if ($media === null) return null;

                $data = $media->useAudio();
                $updateDate = current_time('mysql', 1);

                if ($data === null)
                    return null;

                $result = $this->wpdb->update(
                    BaseRepository::MEDIA_AUDIO_DATA_TABLE_NAME, 
                    array(
                        'mp3_filename'=> $data->getMp3Filename(),
                        'ogg_filename'=> $data->getOggFilename(),
                        'fallback_filename'=> $data->getFallbackFilename(),
                        'update_date'=> $updateDate
                    ),
                    array(
                        'media_data_id' => $mediaDataId
                    ),
                    array(
                        'mp3_filename' => '%s',
                        'ogg_filename' => '%s',
                        'fallback_filename' => '%s',
                        'update_date' => '%s'
                    ),
                    array('%d')
                );

                if ($result === false)
                    return null;
                    
                

                // $data->setMediaDataId($mediaDataId);
                // $data->setMp3Filename($data->getMp3Filename());
                // $data->setOggFilename($data->getOggFilename());
                // $data->setFallbackFilename($data->getFallbackFilename());
                // $data->setInsertDate($data->getInsertDate());
                $data->setUpdateDate(Helper::toDateTimeFromString($updateDate));
                // $data->setId($data->getId());

                return $data;
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }

        private function insertVideoRow(int $mediaDataId, MediaData $media): ?MediaVideoData {
            try {
                if ($media->getTypeId() !== MediaType::YOUTUBE_VIDEO) return null;
                if ($media === null) return null;

                $data = $media->useVideo();
                $insertDate = $updateDate = current_time('mysql', 1);

                if ($data === null)
                    return null;

                $result = $this->wpdb->insert(
                    BaseRepository::MEDIA_VIDEO_DATA_TABLE_NAME, 
                    array(
                        'media_data_id'=> $mediaDataId,
                        'video_url'=> $data->getVideoUrl(),
                        'video_id'=> $data->getVideoId(),
                        'insert_date'=> $insertDate,
                        'update_date'=> $updateDate
                    ),
                    array('%d', '%s', '%s', '%s', '%s')
                );

                if ($result === false)
                    return null;

                $data->setMediaDataId($mediaDataId);
                // $data->setVideoUrl($data->getVideoUrl());
                // $data->setVideoId($data->getVideoId());
                $data->setInsertDate(Helper::toDateTimeFromString($insertDate));
                $data->setUpdateDate(Helper::toDateTimeFromString($updateDate));
                $data->setId($this->wpdb->insert_id);

                return $data;
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }

        private function insertAudioRow(int $mediaDataId, MediaData $media): ?MediaAudioData {
            try {
                if ($media->getTypeId() !== MediaType::BEATS && $media->getTypeId() !== MediaType::SONGS) return null;
                if ($media === null) return null;

                $data = $media->useAudio();
                $insertDate = $updateDate = current_time('mysql', 1);

                if ($data === null)
                    return null;

                $result = $this->wpdb->insert(
                    BaseRepository::MEDIA_AUDIO_DATA_TABLE_NAME, 
                    array(
                        'media_data_id'=> $mediaDataId,
                        'mp3_filename'=> $data->getMp3Filename(),
                        'ogg_filename'=> $data->getOggFilename(),
                        'fallback_filename'=> $data->getFallbackFilename(),
                        'insert_date'=> $insertDate,
                        'update_date'=> $updateDate
                    ),
                    array('%d', '%s', '%s', '%s', '%s', '%s')
                );

                if ($result === false)
                    return null;  

                $data->setMediaDataId($mediaDataId);
                // $data->setMp3Filename($data->getMp3Filename());
                // $data->setOggFilename($data->getOggFilename());
                // $data->setFallbackFilename($data->getFallbackFilename());
                $data->setInsertDate(Helper::toDateTimeFromString($insertDate));
                $data->setUpdateDate(Helper::toDateTimeFromString($updateDate));
                $data->setId($this->wpdb->insert_id);

                return $data;
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }

        private function deleteVideoRow(int $mediaDataId): bool {
            try {
                // if ($media->getTypeId() !== MediaType::YOUTUBE_VIDEO) return null;
                if ($mediaDataId <= 0) return false;

                $result = $this->wpdb->delete(
                    BaseRepository::MEDIA_VIDEO_DATA_TABLE_NAME,
                    array(
                        'media_data_id' => $mediaDataId
                    ),
                    array('%d')
                );

                if ($result === false)
                    return false;   
    
                return $result > 0;
            } catch (Exception $e) {
                return false;
            } finally {
                $this->wpdb->flush();
            }
        }

        private function deleteAudioRow(int $mediaDataId): bool {
            try {
                // if ($media->getTypeId() !== MediaType::BEATS && $media->getTypeId() !== MediaType::SONGS) return null;
                if ($mediaDataId <= 0) return false;

                $result = $this->wpdb->delete(
                    BaseRepository::MEDIA_AUDIO_DATA_TABLE_NAME,
                    array(
                        'media_data_id' => $mediaDataId
                    ),
                    array('%d')
                );

                if ($result === false)
                    return false;   
    
                return $result > 0;
            } catch (Exception $e) {
                return false;
            } finally {
                $this->wpdb->flush();
            }
        }
        
    }
