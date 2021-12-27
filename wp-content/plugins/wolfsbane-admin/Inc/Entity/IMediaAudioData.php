<?php

    /**
     * @package Wolfsbane Admin Plugin
     */

    interface IMediaAudioData {
        public function setMediaDataId(int $mediaDataId);
        public function setMp3Filename(string $filename);
        public function setOggFilename(string $filename);
        public function setFallbackFilename(string $filename);

        public function getMediaDataId(): int;
        public function getMp3Filename(): string;
        public function getOggFilename(): string;
        public function getFallbackFilename(): string;
    }