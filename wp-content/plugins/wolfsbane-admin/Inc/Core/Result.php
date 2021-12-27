<?php

    /**
     * @package Wolfsbane Admin Plugin
     */

    class Result {
        
        private bool $status;
        private string $message;
        
        private function __construct(bool $status, string $message) {
            $this->status = $status;
            $this->message = $message;
        }

        public static function from(bool $status, string $message = '') {
            return new Result($status, $message);
        }

        public function getStatus(): bool {
            return $this->status;
        }

        public function getMessage(): string {
            return $this->message;
        }
    }