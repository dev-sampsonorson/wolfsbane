<?php

    /**
     * @package Wolfsbane Admin Plugin
     */

    class BaseController {        
        protected $plugin_version;
        protected $plugin_path;
        protected $plugin_url;
        protected $plugin;

        
        protected $modules_path;
        protected $helper;
        
        public function __construct() {
            $this->plugin_version = '1.0';
            $this->plugin_path = plugin_dir_path(dirname(__FILE__, 2));
            $this->modules_path = plugin_dir_path(dirname(__FILE__, 2)) . 'Inc/Modules/';
            $this->plugin_url = plugin_dir_url(dirname(__FILE__, 2));
            $this->plugin_script_base_url = plugin_dir_url(dirname(__FILE__, 2)) . '/assets/js';
            $this->plugin_style_base_url = plugin_dir_url(dirname(__FILE__, 2)) . '/assets/css';
            $this->plugin = plugin_basename(dirname(__FILE__, 3)) . '/wolfsbane-admin-plugin.php';

            $this->helper = new Helper();
        }

        protected function getPostVar($varName) {
            return isset($_POST[$varName]) && !empty($_POST[$varName]) ? $_POST[$varName] : null;
        }

        public function getTableName($table) {
            global $wpdb;

            return $wpdb->prefix . $table;
        }
        

        public function return_json($status_code, $result = null)
        {
            $isSuccess = ($status_code >= 200 && $status_code <= 208) || $status_code === 226;
            $resultKey = $isSuccess? 'result' : 'errors';

            $return = array(
                'status' => $isSuccess ? 'success' : 'error',
                'status-code' => $status_code,
                $resultKey => $result
            );

            if (!$isSuccess && is_string($result)) 
                $return[$resultKey] = array($result);
            else
                $return[$resultKey] = $result;

            if (!$isSuccess) {
                // echo "kkkk kkkk kkkk kkk kkkk";           
                wp_send_json_error($return, $status_code);
                // return "kkkkkkkk";
            } else {
                wp_send_json_success($return, $status_code);
            }

            wp_die();
            return false;
        }
    }