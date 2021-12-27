<?php

    /**
     * @package Wolfsbane Admin Plugin
     */

    abstract class BaseRepository {
        
        public const MEDIA_LOCATION_TABLE_NAME = 'wolfsbane_media_location';
        public const MEDIA_TYPE_TABLE_NAME = 'wolfsbane_media_type';
        public const MEDIA_DATA_TABLE_NAME = 'wolfsbane_media_data';
        public const MEDIA_AUDIO_DATA_TABLE_NAME = 'wolfsbane_media_audio_data';
        public const MEDIA_VIDEO_DATA_TABLE_NAME = 'wolfsbane_media_video_data';

        protected $wpdb;

        public function __construct() {
            global $wpdb;

            $this->wpdb = $wpdb;
        }

        public abstract function getTableName();

    }