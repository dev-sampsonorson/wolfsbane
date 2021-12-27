<?php

    /**
     * @package Wolfsbane Admin Plugin
     */

    class MediaTypeRepository extends BaseRepository implements IMediaTypeRepository {

        public function getTableName() {
            return BaseRepository::MEDIA_TYPE_TABLE_NAME;
        }

        public function insert(MediaType $data): ?MediaType {
            try {
                $insertDate = $updateDate = current_time('mysql', 1);

                $result = $this->wpdb->insert(
                    $this->getTableName(), 
                    array(
                        'type_name'=> $data->getName(),
                        'type_slug'=> $data->getSlug(),
                        'insert_date'=> $insertDate,
                        'update_date'=> $updateDate
                    ),
                    array('%s', '%s', '%s', '%s')
                );

                if ($result === false)
                    return null;
                
                return new MediaType(
                    $data->getName(), 
                    $data->getSlug(), 
                    Helper::toDateTimeFromString($insertDate), 
                    Helper::toDateTimeFromString($updateDate), 
                    $this->wpdb->insert_id
                );
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }

        public function update(MediaType $data): ?MediaType {
            try {
                $updateDate = current_time('mysql', 1);

                $result = $this->wpdb->update(
                    $this->getTableName(), 
                    array(
                        'type_name'=> $data->getName(),
                        'type_slug'=> $data->getSlug(),
                        'update_date'=> $updateDate
                    ),
                    array(
                        'media_type_id' => $data->getId()
                    ),
                    array(
                        'type_name' => '%s',
                        'type_slug' => '%s',
                        'update_date' => '%s'
                    ),
                    array('%d')
                );

                if ($result === false)
                    return null;   
    
                return new MediaType(
                    $data->getName(), 
                    $data->getSlug(), 
                    $data->getInsertDate(), 
                    Helper::toDateTimeFromString($updateDate), 
                    $data->getId()
                );
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }

        public function delete(int $id): bool {
            try {

                if ($id <= 0)
                    return false;

                $result = $this->wpdb->delete(
                    $this->getTableName(),
                    array(
                        'media_type_id' => $id
                    ),
                    array('%d')
                );

                if ($result === false)
                    return false;   
    
                return $result > 0;
            } catch (Exception $e) {
                return false;
            } finally {
                $this->wpdb->flush();
            }
        }

        public function getAll(): ?array {
            try {
                $rows = array();
                $result = $this->wpdb->get_results("SELECT * FROM {$this->getTableName()}");

                foreach($result as $row) {                    
                    $rows[] = new MediaType(
                        $row->type_name, 
                        $row->type_slug, 
                        Helper::toDateTimeFromString($row->insert_date), 
                        Helper::toDateTimeFromString($row->update_date), 
                        $row->media_type_id
                    );
                }

                if ($result === null)
                    return null;
    
                return $rows;
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }

        public function getById(int $id): ?MediaType {
            try {

                if ($id <= 0)
                    return null;

                $query = "SELECT * FROM {$this->getTableName()} WHERE `media_type_id` = %d";
                $row = $this->wpdb->get_row($this->wpdb->prepare($query, $id));

                if ($row === null)
                    return null;
    
                return new MediaType(
                        $row->type_name, 
                        $row->type_slug, 
                        Helper::toDateTimeFromString($row->insert_date), 
                        Helper::toDateTimeFromString($row->update_date), 
                        $row->media_type_id
                    );
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }
        
        public function countByDuplicate(string $typeName): ?int {
            try {
                return $this->wpdb->get_var( "SELECT COUNT(*) FROM {$this->getTableName()} WHERE `type_name` = '$typeName'") ?? 0;
            } catch (Exception $e) {
                return null;
            } finally {
                $this->wpdb->flush();
            }
        }
    }