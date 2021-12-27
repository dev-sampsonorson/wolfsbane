<?php

    /**
     * @package Wolfsbane Admin Plugin
     */

    interface IMediaVideoData {
        public function setMediaDataId(int $mediaDataId);
        public function setVideoUrl(string $videoUrl);
        public function setVideoId(string $videoId);
        
        public function getMediaDataId(): int;
        public function getVideoUrl(): string;
        public function getVideoId(): string;
    }