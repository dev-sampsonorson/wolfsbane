<?php

    /**
     * @package Wolfsbane Admin Plugin
     */

    abstract class BaseEntity {
        public int $id;
        public ?DateTime $insertDate;
        public ?DateTime $updateDate;

        protected function __construct(?DateTime $insertDate, ?DateTime $updateDate, int $id = 0) {
            $this->id = $id;
            $this->insertDate = $insertDate; //new DateTime('now', new DateTimeZone(WB_CURRENT_TIMEZONE))
            $this->updateDate = $updateDate;
        }

        public function getId(): int {
            return $this->id;
        }

        public function setId(int $id) {
            $this->id = $id;
        }

        public function isNew() {
            return $this->id <= 0;
        }        

        public function setInsertDate(?DateTime $date) {
            $this->insertDate = $date;
        }

        public function setUpdateDate(?DateTime $date) {
            $this->updateDate = $date;
        }

        public function getInsertDate(): ?DateTime {
            return $this->insertDate;
        }
        
        public function getUpdateDate(): ?DateTime {
            return $this->updateDate;
        }

        public abstract function validate() : boolean;
        public abstract function toArray() : array;
    }