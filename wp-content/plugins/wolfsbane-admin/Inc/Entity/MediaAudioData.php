<?php

    /**
     * @package Wolfsbane Admin Plugin
     */

    class MediaAudioData extends BaseEntity implements IMediaAudioData {

        protected int $mediaDataId;
        protected string $mp3Filename;
        protected string $oggFilename;
        protected string $fallbackFilename;

        public function __construct(int $mediaDataId = 0, string $mp3Filename = '', string $oggFilename = '', string $fallbackFilename = '', 
                                    ?DateTime $insertDate = null, ?DateTime $updateDate = null, int $id = 0) {
                                        
            parent::__construct($insertDate, $updateDate, $id);
            
            $this->mediaDataId = $mediaDataId;
            $this->mp3Filename = $mp3Filename;
            $this->oggFilename = $oggFilename;
            $this->fallbackFilename = $fallbackFilename;
        }

        /* public static function newInstance() {
            $data = new MediaAudioData("", "");
            return $data;
        } */
        
        /* IMediaAudioData */
        public function setMediaDataId(int $mediaDataId) { $this->mediaDataId = $mediaDataId; }
        public function setMp3Filename(string $filename) { $this->mp3Filename = $filename; }
        public function setOggFilename(string $filename) { $this->oggFilename = $filename; }
        public function setFallbackFilename(string $filename) { $this->fallbackFilename = $filename; }

        public function getMediaDataId(): int { return $this->mediaDataId; }
        public function getMp3Filename(): string { return $this->mp3Filename; }
        public function getOggFilename(): string { return $this->oggFilename; }
        public function getFallbackFilename(): string { return $this->fallbackFilename; }

        public function validate() : boolean {
            return true;
        }

        public function toArray() : array {
            return array(
                "id" => $this->getId(),
                "mediaDataId" => $this->getMediaDataId(),
                "mp3Filename" => $this->getMp3Filename(),
                "oggFilename" => $this->setOggFilename(),
                "fallbackFilename" => $this->getFallbackFilename(),
            );
        }

    }