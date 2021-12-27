<?php

    use Rakit\Validation\Validator;

    /**
     * @package Wolfsbane Admin Plugin
     */

    class ManagementCenterController extends BaseController {

        public $settings;
        public $callbacks;
        private $validator;

        private MediaTypeRepository $mediaTypeRepo;
        private MediaLocationRepository $mediaLocationRepo;
        private MediaDataRepository $mediaDataRepo;
    
        public function register() {      
            $this->settings = new SettingsApi();    
            $this->callbacks = new ManagementCenterCallbacks($this);

            $this->validator = new Validator();

            $this->mediaTypeRepo = new MediaTypeRepository();
            $this->mediaLocationRepo = new MediaLocationRepository();
            $this->mediaDataRepo = new MediaDataRepository();
    
            $this->settings
                 ->addPages($this->getPages())
                 ->withSubPage('Management Center')
                 ->addSubPages($this->getSubPages())
                 ->register();


            // Location
            // ------------------
            add_action('wp_ajax_get_media_location', array($this, 'ajax_getMediaLocation'));
            add_action('wp_ajax_nopriv_get_media_location', array($this, 'ajax_getMediaLocation'));

            add_action('wp_ajax_delete_media_location', array($this, 'deleteMediaLocation'));
            add_action('wp_ajax_nopriv_delete_media_location', array($this, 'deleteMediaLocation'));

            add_action('wp_ajax_save_media_location', array($this, 'saveMediaLocation'));
            add_action('wp_ajax_nopriv_save_media_location', array($this, 'saveMediaLocation'));

            // Media Data
            // ------------------

            add_action('wp_ajax_get_media_data', array($this, 'getMediaData'));
            add_action('wp_ajax_nopriv_get_media_data', array($this, 'getMediaData'));

            add_action('wp_ajax_delete_media_data', array($this, 'deleteMediaData'));
            add_action('wp_ajax_nopriv_delete_media_data', array($this, 'deleteMediaData'));

            add_action('wp_ajax_save_media_data', array($this, 'saveMediaData'));
            add_action('wp_ajax_nopriv_save_media_data', array($this, 'saveMediaData'));


            

            // Home Media
            // ------------------

            add_action('wp_ajax_get_media_playlist_by_type', array($this, 'getMediaPlaylistByType'));
            add_action('wp_ajax_nopriv_get_media_playlist_by_type', array($this, 'getMediaPlaylistByType'));

            add_action('wp_ajax_get_media_playlist_by_type_and_location', array($this, 'getMediaPlaylistByTypeAndLocation'));
            add_action('wp_ajax_nopriv_get_media_playlist_by_type_and_location', array($this, 'getMediaPlaylistByTypeAndLocation'));

            add_action('wp_ajax_get_youtube_playlist', array($this, 'getMediaPlaylistByType'));
            add_action('wp_ajax_nopriv_get_youtube_playlist', array($this, 'getMediaPlaylistByType'));
        }

        public function getMediaLocations(): array {
            return $this->mediaLocationRepo->getAll() ?? array();
        }

        public function getMediaLocation($mediaLocationId = 0) {
            try {
                if ($mediaLocationId <= 0)
                    throw new Exception("Invalid media location id");

                return $this->mediaLocationRepo->getById($mediaLocationId);
            } catch(Exception $e) {
                return null;
            }
        }

        public function ajax_getMediaLocation() {
            try {
                if (!DOING_AJAX || !check_ajax_referer('get_media_location_nonce', 'nonce', false)) {
                    return $this->return_json(500, 'Invalid request');
                }

                $mediaLocationId = intVal(trim($this->helper->sanitize($_POST['mediaLocationId'], 'string')));                

                if ($mediaLocationId <= 0)
                    throw new Exception("Invalid media location id");

                $result = $this->mediaLocationRepo->getById($mediaLocationId);
    
                return $this->return_json(200, $result->toArray());
            } catch(Exception $e) {
                return $this->return_json(500, $e->getMessage());
            }
        }

        public function deleteMediaLocation() {
            try {    
                if (!DOING_AJAX || !check_ajax_referer('delete_media_location_nonce', 'nonce', false)) {
                    return $this->return_json(500, 'Invalid request');
                }
                
                $mediaLocationId = intVal(trim($this->helper->sanitize($_POST['mediaLocationId'], 'string')));

                if ($mediaLocationId <= 0)
                    throw new Exception("Invalid media location id");                    

                $locationInstanceCount = $this->mediaDataRepo->countLocationInstance($mediaLocationId);
    
                if ($locationInstanceCount > 0)
                    return $this->return_json(500, 'Media location currently assigned and cannot be deleted');

                $result = $this->mediaLocationRepo->delete($mediaLocationId);
    
                return $this->return_json(200, $result);
            } catch(Exception $e) {
                return $this->return_json(500, $e->getMessage());
            }
        }

        public function saveMediaLocation() {
            try {    
                if (!DOING_AJAX || !check_ajax_referer('save_media_location_nonce', 'nonce', false)) {
                    return $this->return_json(500, 'Invalid request');
                }
                
                $mediaLocationId = intVal(trim($this->helper->sanitize($_POST['mediaLocationId'] ?? '0', 'string')));
                $name = trim($this->helper->sanitize($_POST['mediaLocationName'], 'string'));
                $slug = trim($this->helper->sanitize($_POST['mediaLocationSlug'], 'string'));

                $validation = $this->validator->make([
                    'name' => $name,
                    'slug' => $slug
                ], [
                    'name' => 'required',
                    'slug' => 'required'
                ]);
    
                $validation->setAliases([
                    'name' => 'Media location name',
                    'slug' => 'Media location slug'
                ]);
    
                $validation->setMessage('required', ":attribute is required");
                
                $validation->validate();
    
                if ($validation->fails()) {
                    $this->return_json(500, $validation->errors()->toArray());
                    return;
                }

                if ($mediaLocationId <= 0) {
                    $result = $this->mediaLocationRepo->insert(new MediaLocation($name, $slug));
                } else {
                    $objToUpdate = $this->mediaLocationRepo->getById($mediaLocationId);
                    $objToUpdate->setName($name);
                    $objToUpdate->setSlug($slug);

                    $result = $this->mediaLocationRepo->update($objToUpdate);
                }
    
                return $this->return_json(200, $result);
            } catch(Exception $e) {
                return $this->return_json(500, $e->getMessage());
            }
        }

        public function getMediaPlaylist(int $mediaTypeId) {
            return $this->mediaDataRepo->getAllByType($mediaTypeId) ?? array();
        }

        public function getMediaData() {
            try {    
                if (!DOING_AJAX || !check_ajax_referer('get_media_data_nonce', 'nonce', false)) {
                    return $this->return_json(500, 'Invalid request');
                }
                
                $mediaDataId = intVal(trim($this->helper->sanitize($_POST['mediaDataId'], 'string')));

                if ($mediaDataId <= 0)
                    throw new Exception("Invalid media data id");

                $result = $this->mediaDataRepo->getById($mediaDataId);
    
                return $this->return_json(200, $result->toArray());
            } catch(Exception $e) {
                return $this->return_json(500, $e->getMessage());
            }
        }

        public function getMediaPlaylistByType() {
            try {    
                if (!DOING_AJAX || !check_ajax_referer('get_media_playlist_by_type_nonce', 'nonce', false)) {
                    return $this->return_json(500, 'Invalid request');
                }
                
                $mediaTypeId = intVal(trim($this->helper->sanitize($_POST['mediaTypeId'], 'string')));

                if ($mediaTypeId <= 0)
                    throw new Exception("Invalid media type id");

                $result = $this->getMediaPlaylist($mediaTypeId);

                $rows = array();
                if (is_array($result)) {
                    foreach ($result as $key => $row) {
                        $rows[] = $row->toArray();
                    }
                }
    
                return $this->return_json(200, $rows);
            } catch(Exception $e) {
                return $this->return_json(500, $e->getMessage());
            }
        }

        public function getMediaPlaylistByTypeAndLocation() {
            try {    
                if (!DOING_AJAX || !check_ajax_referer('get_media_playlist_by_type_and_location_nonce', 'nonce', false)) {
                    return $this->return_json(500, 'Invalid request');
                }
                
                $mediaTypeId = intVal(trim($this->helper->sanitize($_POST['mediaTypeId'], 'string')));
                $mediaLocationId = intVal(trim($this->helper->sanitize($_POST['mediaLocationId'], 'string')));

                if ($mediaTypeId <= 0)
                    throw new Exception("Invalid media type id");

                if ($mediaLocationId <= 0)
                    throw new Exception("Invalid media location id");

                $result = $this->mediaDataRepo->getAllByTypeAndLocation($mediaTypeId, $mediaLocationId) ?? array();

                // $result = $this->getMediaPlaylist($mediaTypeId, $mediaLocationId);

                $rows = array();
                if (is_array($result)) {
                    foreach ($result as $key => $row) {
                        $rows[] = $row->toArray();
                    }
                }
    
                return $this->return_json(200, $rows);
            } catch(Exception $e) {
                return $this->return_json(500, $e->getMessage());
            }
        }

        public function getYouTubePlaylist() {
            try {    
                if (!DOING_AJAX || !check_ajax_referer('get_youtube_playlist_nonce', 'nonce', false)) {
                    return $this->return_json(500, 'Invalid request');
                }
                
                $mediaTypeId = intVal(trim($this->helper->sanitize($_POST['mediaTypeId'], 'string')));

                if ($mediaTypeId <= 0)
                    throw new Exception("Invalid media type id");

                $result = $this->getMediaPlaylist($mediaTypeId);

                $rows = array();
                if (is_array($result)) {
                    foreach ($result as $key => $row) {
                        $rows[] = $row->toArray();
                    }
                }
    
                return $this->return_json(200, $rows);
            } catch(Exception $e) {
                return $this->return_json(500, $e->getMessage());
            }
        }

        public function deleteMediaData() {
            try {    
                if (!DOING_AJAX || !check_ajax_referer('delete_media_data_nonce', 'nonce', false)) {
                    return $this->return_json(500, 'Invalid request');
                }
                
                $mediaDataId = intVal(trim($this->helper->sanitize($_POST['mediaDataId'], 'string')));

                if ($mediaDataId <= 0)
                    throw new Exception("Invalid media data id");

                $existingRecord = $this->mediaDataRepo->getById($mediaDataId);

                if ($existingRecord->getTypeId() !== MediaType::YOUTUBE_VIDEO && !$this->deleteServerFiles($existingRecord)->getStatus())
                    throw new Exception("Unable to delete media files from server");                

                $result = $this->mediaDataRepo->delete($mediaDataId);
    
                return $this->return_json(200, $result);
            } catch(Exception $e) {
                return $this->return_json(500, $e->getMessage());
            }
        }

        public function saveMediaData() {
            try {
                $mediaData = null;
                $oldMp3Filename = $oldOggFilename = $oldFallbackFilename = '';
                $nonce = $_POST['nonce'];
                $nonce_name = $_POST['nonce_name'];
                $action = $_POST['action'];
                $filesToSave = array();
                $newFilenames = array();

                $mediaDataId = intVal(trim($this->helper->sanitize($this->getPostVar('mediaDataId') ?? '0', 'string')));
                $filesToSave['mp3Filename'] = isset($_FILES) && !empty($_FILES) && array_key_exists('mp3Filename', $_FILES) ? $_FILES['mp3Filename'] : null;
                $filesToSave['oggFilename'] = isset($_FILES) && !empty($_FILES) && array_key_exists('oggFilename', $_FILES) ? $_FILES['oggFilename'] : null;

                if (!DOING_AJAX || !check_ajax_referer($nonce_name, 'nonce', false)) {
                    return $this->return_json(500, 'Invalid ajax request');
                }
    
                if (!wp_verify_nonce($nonce, $nonce_name))
                    return $this->return_json(500, 'Invalid request');

                if ($mediaDataId > 0) {
                    $mediaData = $this->mediaDataRepo->getById($mediaDataId);
                    $oldMp3Filename = $mediaData->useAudio() !== null ? $mediaData->useAudio()->getMp3Filename() : '';
                    $oldOggFilename = $mediaData->useAudio() !== null ? $mediaData->useAudio()->getOggFilename() : '';
                    $oldFallbackFilename = $mediaData->useAudio() !== null ? $mediaData->useAudio()->getFallbackFilename() : '';
                }

                $mediaData = $this->createMediaDataSaveObj($filesToSave, $mediaData);

                if ($mediaData->getId() <= 0) {
                    if (!$this->insertValidation($filesToSave, $mediaData))
                        return;

                    if($this->isAudioMedia($mediaData) && !$this->moveFilesToServer($filesToSave, $mediaData))
                        $this->return_json(500, 'Unable to upload files to server');
                        
                    $result = $this->mediaDataRepo->insert($mediaData);
                } else {
                    if (!$this->updateValidation($filesToSave, $mediaData))
                        return;

                    if ($mediaData->getTypeId() === MediaType::BEATS || $mediaData->getTypeId() === MediaType::SONGS) {
                        $deleteOldFilesResult = $this->deleteOldServerFiles($mediaData, $filesToSave, $oldMp3Filename, $oldOggFilename);
                        if (!$deleteOldFilesResult->getStatus()) 
                            $this->return_json(500, 'Unable to remove old files from server');
                    }                       

                    if($this->isAudioMedia($mediaData) && !$this->moveFilesToServer($filesToSave, $mediaData))
                        $this->return_json(500, 'Unable to upload files to server');

                    $result = $this->mediaDataRepo->update($mediaData);
                }

                $result->setLocationName($this->getMediaLocation($result->getLocationId())->getName());
    
                return $this->return_json(200, $result->toArray());
            } catch(Exception $e) {
                return $this->return_json(500, $e->getMessage());
            }
        }

        private function moveFilesToServer($files, $mediaDataObj): bool {
            try {
                if ($mediaDataObj->getTypeId() !== MediaType::BEATS && $mediaDataObj->getTypeId() !== MediaType::SONGS)
                    return $this->return_json(500, 'No media file to upload');
    
                if ($mediaDataObj->getId() <= 0 && (!$this->mp3FileExist($files) || !$this->oggFileExist($files)))
                    return $this->return_json(500, 'No media file to upload');
                
                foreach($files as $file) {
                    $audioObj = $mediaDataObj->useAudio();

                    if ($audioObj === null) break;
                    if ($file === null) continue;

                    $isMp3 = $this->getFileExtension($file) === 'mp3';                    

                    $newFilename = WB_UPLOAD_MEDIA_BASE_PATH . ($isMp3 ? $audioObj->getMp3Filename() : $audioObj->getOggFilename());
                    if ($this->check_file_uploaded_name($newFilename)) return $this->return_json(500, 'Invalid file name');
                    if ($this->check_file_uploaded_length($newFilename)) return $this->return_json(500, 'File name length is greater than 225');
                    move_uploaded_file($file['tmp_name'], $newFilename);

                }
            } catch (Exception $e) {
                return false;
            }
            
            return true;
        }

        private function createMediaDataSaveObj($files, $objectToSave): MediaData {
            $mediaDataId = intVal(trim($this->helper->sanitize($this->getPostVar('mediaDataId') ?? '0', 'string')));
            $mediaTypeId = intVal(trim($this->helper->sanitize($this->getPostVar('mediaTypeId') ?? '0', 'string')));
            $mediaTitle = htmlentities(trim($this->helper->sanitize($this->getPostVar('mediaTitle') ?? '', 'string')), ENT_QUOTES);
            $mediaArtist = htmlentities(trim($this->helper->sanitize($this->getPostVar('mediaArtist') ?? '', 'string')), ENT_QUOTES);
            $locationId = intVal(trim($this->helper->sanitize($this->getPostVar('locationId') ?? '0', 'string')));
            $order = intVal(trim($this->helper->sanitize($this->getPostVar('order') ?? '0', 'string')));
            
            $videoUrl = urlencode(trim($this->helper->sanitize($this->getPostVar('videoUrl') ?? '', 'string')));
            $videoId = htmlentities(trim($this->helper->sanitize($this->getPostVar('videoId') ?? '', 'string')), ENT_QUOTES);

            if ($mediaDataId <= 0 && $objectToSave === null) {
                $objectToSave = new MediaData(
                    $mediaTypeId,
                    $mediaTitle, 
                    $mediaArtist,
                    $locationId,
                    $order
                );
            } else {
                // $objectToSave = $this->mediaDataRepo->getById($mediaDataId);
                $objectToSave->setTypeId($mediaTypeId);
                $objectToSave->setTitle($mediaTitle);
                $objectToSave->setArtist($mediaArtist);
                $objectToSave->setLocationId($locationId);
                $objectToSave->setOrder($order);                
            }

            if ($mediaTypeId === MediaType::BEATS || $mediaTypeId === MediaType::SONGS) {
                $data = $objectToSave->useAudio();

                if ($this->mp3FileExist($files)) {
                    $data->setMp3Filename(str_replace('.', '', uniqid('', true)) . '.mp3');
                    $data->setFallbackFilename($data->getMp3Filename());
                }

                if ($this->oggFileExist($files)) {
                    $data->setOggFilename(str_replace('.', '', uniqid('', true)) . '.ogg');
                }

            }

            if ($mediaTypeId === MediaType::YOUTUBE_VIDEO) {
                $data = $objectToSave->useVideo();
                $data->setVideoUrl($videoUrl);
                $data->setVideoId($videoId);
            }

            return $objectToSave;
        }

        private function updateValidation($files, $mediaDataObj) {
            $validation = null;

            $mediaOrderCount = $this->mediaDataRepo->countOrderInstance(
                                    $mediaDataObj->getId(),
                                    $mediaDataObj->getTypeId(), 
                                    $mediaDataObj->getLocationId(), 
                                    $mediaDataObj->getOrder());

            if ($mediaOrderCount > 0)
                return $this->return_json(500, 'Another media has the specified order number');

            if ($mediaDataObj->getTypeId() === MediaType::BEATS || $mediaDataObj->getTypeId() === MediaType::SONGS) {
                $totalFileSize = 0;
                $validFileCount = 0;
    
                foreach($files as $key => $file) {
                    if ($file === null) continue;
    
                    if ($file['error'] !== 0)
                        return $this->return_json(500, 'Image uploading error: INI Error');
    
                    if ($file['error'] === 1)
                        return $this->return_json(500, 'Max upload size exceeded');
    
                    if (!file_exists($file['tmp_name']))
                        return $this->return_json(500, 'Image file is missing in the server');
                        
                    $extension = $this->getFileExtension($file);
    
                    if ($key === 'mp3Filename' && $extension !== 'mp3')
                        return $this->return_json(500, "The mp3 file type must be 'mp3'"); 
    
                    if ($key === 'oggFilename' && $extension !== 'ogg')
                        return $this->return_json(500, "The ogg file type must be 'ogg'"); 
    
                    $totalFileSize += intVal($file['size']);
                    $validFileCount += 1;
                }
    
                if ($validFileCount > 0 && $totalFileSize > WB_MAX_UPLOAD_SIZE)
                    return $this->return_json(500, 'Max upload size exceeded');
                    
                $validation = $this->validator->make([
                    'mediaTypeId' => $mediaDataObj->getTypeId(),
                    'mediaTitle' => $mediaDataObj->getTitle(),
                    'mediaArtist' => $mediaDataObj->getArtist(),
                    'mp3Filename' => $this->getMp3FileArray($files),
                    'oggFilename' => $this->getOggFileArray($files)
                ], [
                    'mediaTypeId' => 'required',
                    'mediaTitle' => 'required',
                    'mediaArtist' => 'required',
                    'mp3Filename' => $this->mp3FileExist($files) ? 'required|uploaded_file:0,10M' : 'uploaded_file:0,10M',
                    'oggFilename' => $this->oggFileExist($files) ? 'required|uploaded_file:0,10M' : 'uploaded_file:0,10M'
                ]);
    
                $validation->setAliases([
                    'mediaTypeId' => 'Media type',
                    'mediaTitle' => 'Media title',
                    'mediaArtist' => 'Media artist',
                    'mp3Filename' => 'Mp3 file',
                    'oggFilename' => 'Ogg file'
                ]);
            } else {
                $validation = $this->validator->make([
                    'mediaTypeId' => $mediaDataObj->getTypeId(),
                    'mediaTitle' => $mediaDataObj->getTitle(),
                    'mediaArtist' => $mediaDataObj->getArtist(),
                    'videoUrl' => $mediaDataObj->useVideo()->getVideoUrl(),
                    'videoId' => $mediaDataObj->useVideo()->getVideoId()
                ], [
                    'mediaTypeId' => 'required',
                    'mediaTitle' => 'required',
                    'mediaArtist' => 'required',
                    'videoUrl' => 'required',
                    'videoId' => 'required'
                ]);
    
                $validation->setAliases([
                    'mediaTypeId' => 'Media type',
                    'mediaTitle' => 'Media title',
                    'mediaArtist' => 'Media artist',
                    'videoUrl' => 'Video URL',
                    'videoId' => 'Video Id'
                ]);
            }            
    
            $validation->setMessage('required', ":attribute is required");
            
            $validation->validate();

            if ($validation->fails()) 
                return $this->return_json(500, $validation->errors()->toArray());

            return true;
        }

        private function insertValidation($files, $mediaDataObj) {
            $validation = null;

            $mediaOrderCount = $this->mediaDataRepo->countOrderInstance(
                                    $mediaDataObj->getId(),
                                    $mediaDataObj->getTypeId(), 
                                    $mediaDataObj->getLocationId(), 
                                    $mediaDataObj->getOrder());

            if ($mediaOrderCount > 0)
                return $this->return_json(500, 'Another media has the specified order number');
        
            if ($mediaDataObj->getTypeId() === MediaType::BEATS || $mediaDataObj->getTypeId() === MediaType::SONGS) {
                $totalFileSize = 0;
    
                foreach($files as $key => $file) {
                    if ($file === null)
                        return $this->return_json(500, 'No media file to upload');
    
                    if ($file['error'] !== 0)
                        return $this->return_json(500, 'Image uploading error: INI Error');
    
                    if ($file['error'] === 1)
                        return $this->return_json(500, 'Max upload size exceeded');
    
                    if (!file_exists($file['tmp_name']))
                        return $this->return_json(500, 'Image file is missing in the server');
                        
                    $extension = $this->getFileExtension($file);
    
                    if ($key === 'mp3Filename' && $extension !== 'mp3')
                        return $this->return_json(500, "The mp3 file type must be 'mp3'"); 
    
                    if ($key === 'oggFilename' && $extension !== 'ogg')
                        return $this->return_json(500, "The ogg file type must be 'ogg'"); 
    
                    $totalFileSize += intVal($file['size']);
                }
    
                if ($totalFileSize > WB_MAX_UPLOAD_SIZE)
                    return $this->return_json(500, 'Max upload size exceeded');

                $validation = $this->validator->make([
                    'mediaTypeId' => $mediaDataObj->getTypeId(),
                    'mediaTitle' => $mediaDataObj->getTitle(),
                    'mediaArtist' => $mediaDataObj->getArtist(),
                    'mp3Filename' => $this->getMp3FileArray($files),
                    'oggFilename' => $this->getOggFileArray($files)
                ], [
                    'mediaTypeId' => 'required',
                    'mediaTitle' => 'required',
                    'mediaArtist' => 'required',
                    'mp3Filename' => 'required|uploaded_file:0,10M',
                    'oggFilename' => 'required|uploaded_file:0,10M'
                ]);
    
                $validation->setAliases([
                    'mediaTypeId' => 'Media type',
                    'mediaTitle' => 'Media title',
                    'mediaArtist' => 'Media artist',
                    'mp3Filename' => 'Mp3 file',
                    'oggFilename' => 'Ogg file'
                ]);
            } else {
                $validation = $this->validator->make([
                    'mediaTypeId' => $mediaDataObj->getTypeId(),
                    'mediaTitle' => $mediaDataObj->getTitle(),
                    'mediaArtist' => $mediaDataObj->getArtist(),
                    'videoUrl' => $mediaDataObj->useVideo()->getVideoUrl(),
                    'videoId' => $mediaDataObj->useVideo()->getVideoId()
                ], [
                    'mediaTypeId' => 'required',
                    'mediaTitle' => 'required',
                    'mediaArtist' => 'required',
                    'videoUrl' => 'required',
                    'videoId' => 'required'
                ]);
    
                $validation->setAliases([
                    'mediaTypeId' => 'Media type',
                    'mediaTitle' => 'Media title',
                    'mediaArtist' => 'Media artist',
                    'videoUrl' => 'Video URL',
                    'videoId' => 'Video Id'
                ]);
            }            
    
            $validation->setMessage('required', ":attribute is required");
            
            $validation->validate();

            if ($validation->fails()) 
                return $this->return_json(500, $validation->errors()->toArray());

            return true;
        }

        private function check_file_uploaded_name($filename): bool {
            return (bool) ((preg_match("`^[-0-9A-Z_\.]+$`i",$filename)) ? true : false);
        }

        private function check_file_uploaded_length($filename): bool {
            return (bool) ((mb_strlen($filename,"UTF-8") > 225) ? true : false);
        }

        private function deleteOldServerFiles($mediaData, $files, $oldMp3Filename, $oldOggFilename): Result {

            if ($mediaData->getId() <= 0)
                return Result::from(false);

            if ($mediaData->useAudio() === null)
                return Result::from(false);

            /* if (!$this->mp3FileExist($files) && !$this->oggFileExist($files))
                return Result::from(false); */

            if ($this->mp3FileExist($files) && !empty($oldMp3Filename)) {
                $mp3File = WB_UPLOAD_MEDIA_BASE_PATH . $oldMp3Filename;       

                if (!file_exists($mp3File) || !is_readable($mp3File))
                    return Result::from(false, "Unable to find mp3 file to delete or no permission");                

                if (!unlink($mp3File))
                    return Result::from(false, "Unable to delete old mp3 fille");
            }

            if ($this->oggFileExist($files) && !empty($oldOggFilename)) {
                $oggFile = WB_UPLOAD_MEDIA_BASE_PATH . $oldOggFilename;       

                if (!file_exists($oggFile) || !is_readable($oggFile))
                    return Result::from(false, "Unable to find ogg file to delete or no permission");             

                if (!unlink($oggFile))
                    return Result::from(false, "Unable to delete old ogg fille");

            }
            
            return Result::from(true, "Old media files removed successfully");  
        }

        private function deleteServerFiles($mediaData): Result {
            if ($mediaData->useAudio() !== null && empty($mediaData->useAudio()->getMp3Filename()))
                return Result::from(false, "Unable to find mp3 file to delete");

            if ($mediaData->useAudio() !== null && empty($mediaData->useAudio()->getOggFilename()))
                return Result::from(false, "Unable to find ogg file to delete");

            $mp3File = WB_UPLOAD_MEDIA_BASE_PATH . $mediaData->useAudio()->getMp3Filename();
            $oggFile = WB_UPLOAD_MEDIA_BASE_PATH . $mediaData->useAudio()->getOggFilename();           

            if (!file_exists($mp3File) || !is_readable($mp3File))
                return Result::from(false, "Unable to find mp3 file to delete or no permission");        

            if (!file_exists($oggFile) || !is_readable($oggFile))
                return Result::from(false, "Unable to find ogg file to delete or no permission");

            if (unlink($mp3File) && unlink($oggFile))
                return Result::from(true, "Files delete successfully");
            
            return Result::from(false, "Unable to delete files from server");  
        }

        private function getFileExtension($file) {
            if ($file === null) return null;

            $parts = explode('.', $file['name']);
            return strtolower(end($parts));
        }

        private function mp3FileExist($files): bool {
            if ($files === null) return false;

            return array_key_exists('mp3Filename', $files) && $files['mp3Filename'] !== null;
        }

        private function oggFileExist($files): bool {
            if ($files === null) return false;

            return array_key_exists('oggFilename', $files) && $files['oggFilename'] !== null;
        }


        

        private function getNewMp3FileName($newFilenames) {
            if (array_key_exists('mp3Filename', $newFilenames) && $newFilenames['mp3Filename'] !== null) {
                return $newFilenames['mp3Filename'];
            }

            return null;
        }

        private function getNewOggFileName($newFilenames) {
            if(array_key_exists('oggFilename', $newFilenames) && $newFilenames['oggFilename'] !== null) {
                return $newFilenames['oggFilename'];
            }

            return null;
        }
        

        /* private function toSaveMp3File($mediaDataId, $files) {
            return $mediaDataId > 0 && $this->mp3FileExist($files);
        }

        private function toSaveOggFile($mediaDataId, $files) {
            return $mediaDataId > 0 && $this->oggFileExist($files);
        } */

        private function getMp3FileArray($files) {
            return $files['mp3Filename'];
        }

        private function getOggFileArray($files) {
            return $files['oggFilename'];
        }

        private function isAudioMedia($mediaData) {
            return $mediaData->getTypeId() === MediaType::BEATS || $mediaData->getTypeId() === MediaType::SONGS;
        }

        private function getPages() {
            return array(
                array(
                    'page_title' => 'Management Center', 
                    'menu_title' => 'Wolfsbane Admin', 
                    'capability' => 'manage_options', 
                    'menu_slug' => 'wolfsbane-admin-plugin', 
                    'callback' => array($this->callbacks, 'dashboardView'), 
                    'icon_url' => 'dashicons-admin-generic', 
                    'position' => 110
                )
            );
        }        

        private function getSubPages() {
            return array(
                array(
                    'parent_slug' => 'wolfsbane-admin-plugin', 
                    'page_title' => 'Short Codes', 
                    'menu_title' => 'Short Codes', 
                    'capability' => 'manage_options', 
                    'menu_slug' => 'wolfsbane-admin-shortcode', 
                    'callback' => array($this->callbacks, 'shortcodeView')
                )
            );
        }
    }
