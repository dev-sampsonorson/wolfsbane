<?php

    /**
     * @package Wolfsbane Admin Plugin
     */

    class Enqueue extends BaseController {
        public function register() {
            add_action('wp_enqueue_scripts', array($this, 'enqueueFrontendScripts'));
            add_action('admin_enqueue_scripts', array($this, 'enqueueBackendScripts'));
        }
    
        public function enqueueBackendScripts() {
            wp_enqueue_style( 'wolfsbane-admin-css', $this->plugin_url . 'assets/css/backend.css', array(), microtime(), false);
            wp_enqueue_style( 'bootstrap-css', $this->plugin_url . 'assets/css/bootstrap.min.css', array(), false, false);
            
            // wp_enqueue_script( 'jquery-js', $this->plugin_url . 'assets/js/jquery-3.5.1.min.js', array(), false, true);
            // wp_enqueue_script( 'popper-js', $this->plugin_url . 'assets/js/popper.min.js', array('jquery-js'), false, true);
            // wp_enqueue_script( 'bootstrap-js', $this->plugin_url . 'assets/js/bootstrap.min.js', array('popper-js'), false, true);
            wp_enqueue_script( 'index-js', $this->plugin_url . 'assets/js/index.js', array(), false, true);
            wp_enqueue_script( 'runtime-js', $this->plugin_url . 'assets/js/runtime.plugin-bundle.js', array('index-js'), false, true);
            wp_enqueue_script( 'vendor-js', $this->plugin_url . 'assets/js/vendor.plugin-bundle.js', array('runtime-js'), false, true);
            wp_enqueue_script( 'management-center-js', $this->plugin_url . 'assets/js/management-center-script.plugin-bundle.js', array('vendor-js'), microtime(), true);
        }

        public function enqueueFrontendScripts() {

        }
    }