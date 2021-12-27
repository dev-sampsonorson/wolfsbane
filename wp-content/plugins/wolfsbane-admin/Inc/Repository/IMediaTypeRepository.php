<?php

    /**
     * @package Wolfsbane Admin Plugin
     */

    interface IMediaTypeRepository {

        public function insert(MediaType $data): ?MediaType;
        public function update(MediaType $data): ?MediaType;
        public function delete(int $id): bool;
        public function getAll(): ?array;
        public function getById(int $id): ?MediaType;
        public function countByDuplicate(string $typeName): ?int;

    }