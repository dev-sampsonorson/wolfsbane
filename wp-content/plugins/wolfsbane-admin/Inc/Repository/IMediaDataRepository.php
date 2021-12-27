<?php

    /**
     * @package Wolfsbane Admin Plugin
     */

    interface IMediaDataRepository {

        public function insert(MediaData $data): ?MediaData;
        public function update(MediaData $data): ?MediaData;
        public function delete(int $id): bool;
        public function getAll(): ?array;
        public function getById(int $id): ?MediaData;
        public function countByDuplicate(string $title, string $artist): ?int;

    }