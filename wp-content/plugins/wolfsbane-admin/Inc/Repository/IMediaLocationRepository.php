<?php

    /**
     * @package Wolfsbane Admin Plugin
     */

    interface IMediaLocationRepository {

        public function insert(MediaLocation $data): ?MediaLocation;
        public function update(MediaLocation $data): ?MediaLocation;
        public function delete(int $id): bool;
        public function getAll(): ?array;
        public function getById(int $id): ?MediaLocation;
        public function countByDuplicate(string $locationName): ?int;

    }