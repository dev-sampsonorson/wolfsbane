<?php
    if (!session_id())
        session_start();

    /**
     * @package Wolfsbane Admin Plugin
     */

    /**
     * Plugin Name: Wolfsbane Admin Plugin
     * Description: Use this plugin to manage the Wolfsbane website
     * Version: 1.0.0
     * Author: Sampson Orson Jackson
     * Text Domain: wolfsbane-admin-plugin
     */

    // Make sure we don't expose any info if called directly
    defined('ABSPATH') or die('Hey, you can\'t access this file');
    define ('WB_PLUGIN_PATH', plugin_dir_path(__FILE__));
    define ('WB_MODULES_PATH', plugin_dir_path(__FILE__). 'Inc/Modules/');
    define ('WB_UPLOAD_BASE_PATH', plugin_dir_path(__FILE__). 'Upload/');
    define ('WB_UPLOAD_MEDIA_BASE_PATH', plugin_dir_path(__FILE__). 'Upload/Media/');
    define ('WB_UPLOAD_MEDIA_BASE_URL', plugin_dir_url(__FILE__). '/Upload/Media/');
    define ('WB_MAX_UPLOAD_SIZE', 31457280);
    define ('WB_CURRENT_TIMEZONE', "Africa/Lagos");

    define ('WOLFSBANE_ADMIN_VERSION', '1.0' );
    define ('WOLFSBANE_ADMIN_DB_VERSION', '1.0' );
    define ('WB_CONTACT_PAGE_SLUG', 'contact' );
    define ('WB_CONTACT_PAGE_INFO_METABOX_NONCE', 'wolfsbane-contact-info-nonce' );
    define ('WB_CONTACT_PAGE_INFO_METABOX_ACTION', 'saveContactInfoMetabox' );
    define ('WB_CONTACT_PAGE_INFO_METABOX_KEY', '_wolfsbane-contact-info-key' );

    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');

    // Composer
    require('vendor/autoload.php');

    // Helper
    require_once(WB_PLUGIN_PATH . 'Inc/Core/Helper.php');

    // Functions
    require_once(WB_PLUGIN_PATH . 'Inc/Functions.php');
    
    // Libraries
    require_once(WB_PLUGIN_PATH . 'Inc/Libraries/PHPMailer/Exception.php');
    require_once(WB_PLUGIN_PATH . 'Inc/Libraries/PHPMailer/PHPMailer.php');
    require_once(WB_PLUGIN_PATH . 'Inc/Libraries/PHPMailer/SMTP.php');
    // require_once(WB_PLUGIN_PATH . 'Inc/Libraries/PHPMailer/OAuth.php');
    
    // Core
    require_once(WB_PLUGIN_PATH . 'Inc/Core/Result.php');
    require_once(WB_PLUGIN_PATH . 'Inc/Core/BaseEntity.php');
    require_once(WB_PLUGIN_PATH . 'Inc/Core/BaseRepository.php');
    require_once(WB_PLUGIN_PATH . 'Inc/Core/BaseController.php');
    require_once(WB_PLUGIN_PATH . 'Inc/Core/Enqueue.php');
    require_once(WB_PLUGIN_PATH . 'Inc/Core/SettingsLinks.php');
    require_once(WB_PLUGIN_PATH . 'Inc/Core/Manager.php');
    require_once(WB_PLUGIN_PATH . 'Inc/Core/SettingsApi.php');

    /*
     * Entities
     */
    require_once(WB_PLUGIN_PATH . 'Inc/Entity/IMediaAudioData.php');
    require_once(WB_PLUGIN_PATH . 'Inc/Entity/IMediaVideoData.php');
    require_once(WB_PLUGIN_PATH . 'Inc/Entity/MediaAudioData.php');
    require_once(WB_PLUGIN_PATH . 'Inc/Entity/MediaVideoData.php');
    require_once(WB_PLUGIN_PATH . 'Inc/Entity/MediaData.php');
    require_once(WB_PLUGIN_PATH . 'Inc/Entity/MediaLocation.php');
    require_once(WB_PLUGIN_PATH . 'Inc/Entity/MediaType.php');

    /*
     * Repository
     */
    require_once(WB_PLUGIN_PATH . 'Inc/Repository/IMediaLocationRepository.php');
    require_once(WB_PLUGIN_PATH . 'Inc/Repository/IMediaTypeRepository.php');
    require_once(WB_PLUGIN_PATH . 'Inc/Repository/IMediaDataRepository.php');
    require_once(WB_PLUGIN_PATH . 'Inc/Repository/MediaLocationRepository.php');
    require_once(WB_PLUGIN_PATH . 'Inc/Repository/MediaTypeRepository.php');
    require_once(WB_PLUGIN_PATH . 'Inc/Repository/MediaDataRepository.php');



    /*
     * Modules
     */

    // Management Center Module
    require_once(WB_MODULES_PATH . 'ManagementCenter/Callbacks/ManagementCenterCallbacks.php');
    require_once(WB_MODULES_PATH . 'ManagementCenter/Controllers/ManagementCenterController.php');

    // Contact Form Module
    require_once(WB_MODULES_PATH . 'ContactForm/Callbacks/ContactFormCallbacks.php');
    require_once(WB_MODULES_PATH . 'ContactForm/Controllers/ContactFormController.php');

    // Initialization
    require_once(WB_PLUGIN_PATH . 'Inc/Init.php');

    register_activation_hook(__FILE__, array('Manager', 'activate'));
    register_deactivation_hook(__FILE__, array('Manager', 'deactivate'));
    register_uninstall_hook(__FILE__, array('Manager', 'uninstall'));
    
    add_action( 'init', function() {
        if (class_exists('Init')) {
            Init::register_services();
        }
    });