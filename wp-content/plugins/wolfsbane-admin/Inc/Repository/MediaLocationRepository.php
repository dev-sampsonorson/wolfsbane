<?php

    /**
     * @package Wolfsbane Admin Plugin
     */

    class MediaLocationRepository extends BaseRepository implements IMediaLocationRepository {

        public function getTableName() {
            return BaseRepository::MEDIA_LOCATION_TABLE_NAME;
        }

        public function insert(MediaLocation $data): ?MediaLocation {
            try {
                $insertDate = $updateDate = current_time('mysql', 1);

                $result = $this->wpdb->insert(
                    $this->getTableName(), 
                    array(
                        'location_name'=> $data->getName(),
                        'location_slug'=> $data->getSlug(),
                        'insert_date'=> $insertDate,
                        'update_date'=> $updateDate
                    ),
                    array('%s', '%s', '%s', '%s')
                );

                if ($result === false)
                    return null;
    
                return new MediaLocation(
                    $data->getName(), 
                    $data->getSlug(), 
                    Helper::toDateTimeFromString($insertDate), 
                    Helper::toDateTimeFromString($updateDate), 
                    $this->wpdb->insert_id
                );
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }

        public function update(MediaLocation $data): ?MediaLocation {
            try {
                $updateDate = current_time('mysql', 1);

                $result = $this->wpdb->update(
                    $this->getTableName(), 
                    array(
                        'location_name'=> $data->getName(),
                        'location_slug'=> $data->getSlug(),
                        'update_date'=> $updateDate
                    ),
                    array(
                        'media_location_id' => $data->getId()
                    ),
                    array(
                        'location_name' => '%s',
                        'location_slug' => '%s',
                        'update_date' => '%s'
                    ),
                    array('%d')
                );

                if ($result === false)
                    return null;   
    
    
                return new MediaLocation(
                    $data->getName(), 
                    $data->getSlug(), 
                    $data->getInsertDate(), 
                    Helper::toDateTimeFromString($updateDate), 
                    $data->getId()
                );
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

                $result = $this->wpdb->delete(
                    $this->getTableName(),
                    array(
                        'media_location_id' => $id
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

        public function getAll(): ?array {
            try {
                $rows = array();
                $result = $this->wpdb->get_results("SELECT * FROM {$this->getTableName()}");
                
                foreach($result as $row) {                
                    $rows[] = new MediaLocation(
                        $row->location_name, 
                        $row->location_slug, 
                        Helper::toDateTimeFromString($row->insert_date), 
                        Helper::toDateTimeFromString($row->update_date), 
                        $row->media_location_id
                    );
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

        public function getById(int $id): ?MediaLocation {
            try {

                if ($id <= 0)
                    return null;

                $query = "SELECT * FROM {$this->getTableName()} WHERE `media_location_id` = %d";
                $row = $this->wpdb->get_row($this->wpdb->prepare($query, $id));

                if ($row === null)
                    return null;
                    
                return new MediaLocation(
                        $row->location_name, 
                        $row->location_slug, 
                        Helper::toDateTimeFromString($row->insert_date), 
                        Helper::toDateTimeFromString($row->update_date), 
                        $row->media_location_id
                    );
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }

        public function countByDuplicate(string $locationName): ?int {
            try {
                return $this->wpdb->get_var( "SELECT COUNT(*) FROM {$this->getTableName()} WHERE `location_name` = '$locationName'") ?? 0;
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }
    }