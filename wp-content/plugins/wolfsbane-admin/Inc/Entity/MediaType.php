<?php

    /**
     * @package Wolfsbane Admin Plugin
     */

    class MediaType extends BaseEntity {        
        
        public const BEATS = 1;
        public const SONGS = 2;
        public const YOUTUBE_VIDEO = 3;

        protected string $name;
        protected string $slug;

        public function __construct(string $name, string $slug, ?DateTime $insertDate = null, ?DateTime $updateDate = null, int $id = 0) {
            parent::__construct($insertDate, $updateDate, $id);
            
            $this->name = $name;
            $this->slug = $slug;
        }

        public function setName(string $name) {
            $this->name = $name;
        }

        public function setSlug(string $slug) {
            $this->slug = $slug;
        }

        public function getName(): string {
            return $this->name;
        }

        public function getSlug(): string {
            return $this->slug;
        }

        public function validate() : boolean {
            return true;
        }

        public function toArray() : array {
            return array(
                "id" => $this->getId(),
                "name" => $this->getName(),
                "slug" => $this->getSlug(),
            );
        }

    }