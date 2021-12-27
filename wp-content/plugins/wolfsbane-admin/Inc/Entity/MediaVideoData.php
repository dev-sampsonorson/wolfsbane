<?php

    /**
     * @package Wolfsbane Admin Plugin
     */

    class MediaVideoData extends BaseEntity implements IMediaVideoData {

        protected int $mediaDataId;
        protected string $videoUrl;
        protected string $videoId;

        public function __construct(int $mediaDataId = 0, string $videoUrl = '', string $videoId = '', 
                                    ?DateTime $insertDate = null, ?DateTime $updateDate = null, int $id = 0) {
                                        
            parent::__construct($insertDate, $updateDate, $id);
            
            $this->mediaDataId = $mediaDataId;
            $this->videoUrl = $videoUrl;
            $this->videoId = $videoId;
        }
        
        /* IMediaVideoData */
        public function setMediaDataId(int $mediaDataId) { $this->mediaDataId = $mediaDataId; }
        public function setVideoUrl(string $videoUrl) { $this->videoUrl = $videoUrl; }
        public function setVideoId(string $videoId) { $this->videoId = $videoId; }
        
        public function getMediaDataId(): int { return $this->mediaDataId; }
        public function getVideoUrl(): string { return $this->videoUrl; }
        public function getVideoId(): string { return $this->videoId; }

        public function validate() : boolean {
            return true;
        }

        public function toArray() : array {
            return array(
                "id" => $this->getId(),
                "mediaDataId" => $this->getMediaDataId(),
                "videoUrl" => $this->getVideoUrl(),
                "videoId" => $this->getVideoId(),
            );
        }

    }