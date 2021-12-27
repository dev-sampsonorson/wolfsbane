<?php

    /**
     * @package Wolfsbane Admin Plugin
     */

    class Manager extends BaseController {

        private static $tables = array(
            BaseRepository::MEDIA_LOCATION_TABLE_NAME => array(
                'primary_key' => 'media_location_id',
                'columns' => array(
                    'media_location_id' => 'int(11) NOT NULL AUTO_INCREMENT',
                    'location_name' => 'tinytext NOT NULL',
                    'location_slug' => 'tinytext NOT NULL',
                    'insert_date' => 'DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP',
                    'update_date' => 'DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP'
                ),
                'data' => array(
                    array('media_location_id' => 1, 'location_name' => 'Location 1', 'location_slug' => 'location-1'),
                    array('media_location_id' => 2, 'location_name' => 'Location 2', 'location_slug' => 'location-2'),
                    array('media_location_id' => 3, 'location_name' => 'Location 3', 'location_slug' => 'location-3'),
                )
            ),
            BaseRepository::MEDIA_TYPE_TABLE_NAME => array(
                'primary_key' => 'media_type_id',
                'columns' => array(
                    'media_type_id' => 'int(11) NOT NULL AUTO_INCREMENT',
                    'type_name' => 'tinytext NOT NULL',
                    'type_slug' => 'tinytext NOT NULL',
                    'insert_date' => 'DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP',
                    'update_date' => 'DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP'
                ),
                'data' => array(
                    array('media_type_id' => 1, 'type_name' => 'Beats', 'type_slug' => 'beats'),
                    array('media_type_id' => 2, 'type_name' => 'Songs', 'type_slug' => 'songs'),
                    array('media_type_id' => 3, 'type_name' => 'Youtube Video', 'type_slug' => 'youtube-video'),
                )
            ),
            BaseRepository::MEDIA_DATA_TABLE_NAME => array(
                'primary_key' => 'media_data_id',
                'columns' => array(
                    'media_data_id' => 'int(11) NOT NULL AUTO_INCREMENT',
                    'media_type_id' => 'int(11) NOT NULL',
                    'media_location_id' => 'int(11) NOT NULL',
                    'media_order' => 'int(11) NOT NULL',
                    'title' => 'tinytext NOT NULL',
                    'artist' => 'tinytext NOT NULL',
                    'insert_date' => 'DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP',
                    'update_date' => 'DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP'
                )
            ),
            BaseRepository::MEDIA_AUDIO_DATA_TABLE_NAME => array(
                'primary_key' => 'media_audio_data_id',
                'columns' => array(
                    'media_audio_data_id' => 'int(11) NOT NULL AUTO_INCREMENT',
                    'media_data_id' => 'int(11) NOT NULL',
                    'mp3_filename' => 'tinytext NOT NULL',
                    'ogg_filename' => 'tinytext NOT NULL',
                    'fallback_filename' => 'tinytext NOT NULL',
                    'insert_date' => 'DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP',
                    'update_date' => 'DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP'
                )
            ),
            BaseRepository::MEDIA_VIDEO_DATA_TABLE_NAME => array(
                'primary_key' => 'media_video_data_id',
                'columns' => array(
                    'media_video_data_id' => 'int(11) NOT NULL AUTO_INCREMENT',
                    'media_data_id' => 'int(11) NOT NULL',
                    'video_url' => 'varchar(255) NOT NULL',
                    'video_id' => 'tinytext NOT NULL',
                    'insert_date' => 'DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP',
                    'update_date' => 'DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP'
                )
            )
        );

        public static function activate() {
            flush_rewrite_rules();

            foreach(Manager::$tables as $table_name => $value) {
                if (!Manager::createTable($table_name, Manager::$tables[$table_name])) 
                    continue;

                if(!array_key_exists('data', Manager::$tables[$table_name]))
                    continue;
                
                if(!Manager::loadDefaultData($table_name, Manager::$tables[$table_name]))
                    exit();
            }
            
            // when creating tables
            add_option('wolfsbane_admin_db_version', WOLFSBANE_ADMIN_DB_VERSION);
            
            // Create Media Directory
            Manager::createMediaDirectory();
        }

        private static function createMediaDirectory() {
            try {
                if (file_exists(WB_UPLOAD_MEDIA_BASE_PATH)) return;

                $oldumask = umask(0);
                if (!mkdir(WB_UPLOAD_MEDIA_BASE_PATH, 0777, true)) {
                    die('Failed to create media upload directory');
                }
                umask($oldumask);
            } catch(Exception $e) {
                exit();
            }
            
        }

        private static function removeMediaDirectory() {
            if (!file_exists(WB_UPLOAD_BASE_PATH)) retrun;
            
            if (!Manager::rrmdir(WB_UPLOAD_BASE_PATH)) {
                die('Failed to remove media upload directory');
            }
        }

        private static function rrmdir($dir) {
            if (is_dir($dir)) {
                $objects = scandir($dir);
                foreach ($objects as $object) {
                    if ($object != "." && $object != "..") {
                        if (filetype($dir."/".$object) == "dir") Manager::rrmdir($dir."/".$object); else unlink($dir."/".$object);
                    }
                }
                reset($objects);
                return rmdir($dir);
            }

            return false;
        }

        private static function createTable($table_name, $table_cols) {
            
            try {
                if (Manager::tableExists($table_name)) return false;
    
                $sql = "CREATE TABLE $table_name (";
                foreach($table_cols['columns'] as $key => $value) {
                    $sql .= "$key $value, ";
                }
    
                $sql .= "PRIMARY KEY (" . $table_cols['primary_key'] . ")";
                $sql .= ")";            
    
                if (!isset($sql)) return;
    
                dbDelta($sql);
    
                add_option('wolfsbane_admin_db_version', WOLFSBANE_ADMIN_DB_VERSION);
            }
            catch(Exception $e) {
                return false;
            }

            return true;
        }

        private static function tableExists($table_name) {
            global $wpdb;
            return $wpdb->get_var("SHOW TABLES LIKE '" . $table_name . "'") == $table_name;
        }

        private static function hasData($table_name) {
            global $wpdb;            
            return $wpdb->get_var("SELECT COUNT(*) FROM " . $table_name) > 0;
        }

        private static function removeTable($table_name) {
            global $wpdb;

            $sql = "DROP TABLE IF EXISTS " . $table_name;

            return $wpdb->query($sql);
        }

        private static function loadDefaultData($table_name, $table_cols) {            
            global $wpdb; 

            try {

                if(!array_key_exists('data', Manager::$tables[$table_name]))
                    return false;  
                
                if (!Manager::tableExists($table_name)) return false;
                if (Manager::hasData($table_name)) return false;
    
                // $query = "INSERT INTO $table_name (`review_cost_type_id`, `review_cost_type`) VALUES (%d, %s)";
    
                foreach($table_cols['data'] as $row) {
                    $query_template = "";
                    $value_template = "";
                    $query_template = "INSERT INTO $table_name (";

                    foreach($row as $key => $value) {
                        $isString = in_array(trim(gettype($value)), array("string"));
                        $isNumber = in_array(trim(gettype($value)), array("integer", "double", "float"));
                        $query_template .= "`{$key}`,";
                        $value_template .= $isString == true ? "%s," : "";
                        $value_template .= $isNumber == true  ? "%d," : "";
                    }
    
                    $query_template = substr(trim($query_template), 0, -1);
                    $value_template = substr(trim($value_template), 0, -1);
    
                    $query_template .= ") VALUES (";
                    $query_template .= $value_template;
                    $query_template .= ")";

                    $prepare_query = $wpdb->prepare($query_template, array_values($row));
                    
                    $result = $wpdb->query($prepare_query);
                }

            } catch(Exception $e) {
                return false;
            }
            
            return $result ? true : false;
        }

        public static function deactivate() {
            flush_rewrite_rules();
            
            // Create Media Directory
            // Manager::removeMediaDirectory();
        }

        public static function uninstall() {
            // when deleting tables
            delete_option('wolfsbane_admin_db_version');

            foreach(Manager::$tables as $table_name => $value) {
                $result = Manager::removeTable($table_name, Manager::$tables[$table_name]);
            }
            
            // Create Media Directory
            // Manager::removeMediaDirectory();
        }

    }