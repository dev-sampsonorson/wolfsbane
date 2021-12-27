<?php

    /**
     * @package Wolfsbane Admin Plugin
     */

    class MediaData extends BaseEntity {

        protected int $typeId;
        protected string $title;
        protected string $artist;
        protected int $locationId;
        protected string $locationName;
        protected int $order;
        protected ?MediaAudioData $audio;
        protected ?MediaVideoData $video;

        public function __construct(int $typeId, string $title, string $artist, int $locationId, int $order, ?DateTime $insertDate = null, ?DateTime $updateDate = null, int $id = 0) {
            parent::__construct($insertDate, $updateDate, $id);
            
            $this->audio = null;
            $this->video = null;
            $this->typeId = $typeId;
            $this->title = $title;
            $this->artist = $artist;    
            $this->locationId = $locationId;    
            $this->locationName = '';
            $this->order = $order;
        }

        public function useAudio(?IMediaAudioData $data = null) : ?IMediaAudioData { 
            if ($this->typeId !== MediaType::BEATS && $this->typeId !== MediaType::SONGS) return null;
            if ($this->audio === null)
                $this->audio = $data === null ? new MediaAudioData() : $data;

            return $this->audio;
        }

        public function useVideo(?IMediaVideoData $data = null) : ?IMediaVideoData {               
            if ($this->typeId !== MediaType::YOUTUBE_VIDEO) return null;
            if ($this->video === null)
                $this->video = $data === null ? new MediaVideoData() : $data;
                
            return $this->video;
        }

        public function setTypeId(int $typeId) { $this->typeId = $typeId; }
        public function setTitle(string $title) { $this->title = $title; }
        public function setArtist(string $artist) { $this->artist = $artist; }
        public function setLocationId(int $locationId) { $this->locationId = $locationId; }
        public function setLocationName(string $locationName) { $this->locationName = $locationName; }
        public function setOrder(int $order) { $this->order = $order; }

        public function getTypeId(): int { return $this->typeId; }
        public function getTitle(): string { return $this->title; }
        public function getArtist(): string { return $this->artist; }
        public function getLocationId(): int { return $this->locationId; }
        public function getLocationName(): string { return $this->locationName; }
        public function getOrder(): int { return $this->order; }

        public function validate() : boolean {
            return true;
        }

        public function toArray() : array {
            return array(
                "id" => $this->getId(),
                "typeId" => $this->getTypeId(),
                "title" => $this->getTitle(),
                "artist" => $this->getArtist(),
                "locationId" => $this->getLocationId(),
                "locationName" => $this->getLocationName(),
                "order" => $this->getOrder(),
                "mp3Filename" => $this->useAudio() === null ? '' : $this->useAudio()->getMp3Filename(),
                "oggFilename" => $this->useAudio() === null ? '' : $this->useAudio()->getOggFilename(),
                "fallbackFilename" => $this->useAudio() === null ? '' : $this->useAudio()->getFallbackFilename(),
                "mp3Url" => $this->useAudio() === null ? '' : WB_UPLOAD_MEDIA_BASE_URL . $this->useAudio()->getMp3Filename(),
                "oggUrl" => $this->useAudio() === null ? '' : WB_UPLOAD_MEDIA_BASE_URL . $this->useAudio()->getOggFilename(),
                "fallbackUrl" => $this->useAudio() === null ? '' : WB_UPLOAD_MEDIA_BASE_URL . $this->useAudio()->getFallbackFilename(),
                "videoUrl" => $this->useVideo() === null ? '' : urldecode($this->useVideo()->getVideoUrl()),
                "videoId" => $this->useVideo() === null ? '' : $this->useVideo()->getVideoId()
            );
        }

    }