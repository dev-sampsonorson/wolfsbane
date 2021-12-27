<?php
/**
 * Wolfsbane Theme functions and definitions
 *
 *
 * @package Wolfsbane
 */

 if (!function_exists('wolfsbane_setup')) {
     function wolfsbane_setup() {
        
    }
 }
    
function wolfsbane_scripts() {
    $asset_dir = '/template-v2/wwwroot';

    // styles    
    wp_enqueue_style( 'font-awesome-css', '//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css', array(), false, false); //microtime()

    // scripts
    wp_enqueue_script( 'polyfill-js', get_template_directory_uri() . $asset_dir . '/js/polyfill.min.js', array(), false, true);
    wp_enqueue_script( 'runtime-js', get_template_directory_uri() . $asset_dir . '/js/runtime.bundle.js', array('polyfill-js'), false, true);
    wp_enqueue_script( 'vendor-js', get_template_directory_uri() . $asset_dir . '/js/vendor.bundle.js', array('polyfill-js', 'runtime-js'), false, true);
    wp_enqueue_script( 'modernizer-js', get_template_directory_uri() . $asset_dir . '/js/modernizr-custom.js', array('vendor-js', 'polyfill-js', 'runtime-js'), false, true);

    if(is_page(array('home'))){
        wp_enqueue_style( 'home-css', get_template_directory_uri() . $asset_dir . '/css/home.css', array('font-awesome-css'), false, false);
        wp_register_script( 'home-page-bundle', get_template_directory_uri() . $asset_dir . '/js/home-script.bundle.js', array('modernizer-js'), microtime(), true);

        $script_config = array(
            'audio_url' => get_template_directory_uri() . '/audio'
        );
        wp_localize_script( 'home-page-bundle', 'wp_script_config', $script_config );
        wp_enqueue_script( 'home-page-bundle' );
    } elseif(is_page(array('studio'))){
        wp_enqueue_style( 'studio-css', get_template_directory_uri() . $asset_dir . '/css/studio.css', array('font-awesome-css'), false, false);
        wp_enqueue_script( 'studio-page-bundle', get_template_directory_uri() . $asset_dir . '/js/shared-script.bundle.js', array('modernizer-js'), '1.0.0', true);
    } elseif(is_page(array('music'))){
        wp_enqueue_style( 'music-css', get_template_directory_uri() . $asset_dir . '/css/music.css', array('font-awesome-css'), false, false);
        wp_register_script( 'music-page-bundle', get_template_directory_uri() . $asset_dir . '/js/music-script.bundle.js', array('modernizer-js'), '1.0.0', true);

        $script_config = array(
            'audio_url' => get_template_directory_uri() . '/audio'
        );
        wp_localize_script( 'music-page-bundle', 'wp_script_config', $script_config );
        wp_enqueue_script( 'music-page-bundle' );
    } elseif(is_page(array('about'))){
        wp_enqueue_style( 'about-css', get_template_directory_uri() . $asset_dir . '/css/about.css', array('font-awesome-css'), false, false);
        wp_enqueue_script( 'about-page-bundle', get_template_directory_uri() . $asset_dir . '/js/shared-script.bundle.js', array('modernizer-js'), '1.0.0', true);
    } elseif(is_page(array('contact'))){
        wp_enqueue_style( 'contact-css', get_template_directory_uri() . $asset_dir . '/css/contact.css', array('font-awesome-css'), false, false);
        wp_enqueue_script( 'dom-parser-extension-js', get_template_directory_uri() . $asset_dir . '/js/dom-parser-extension.js', array('vendor-js'), '1.0.0', true);
        wp_enqueue_script( 'jquery-3-5-1', get_template_directory_uri() . $asset_dir . '/js/jquery-3.5.1.min.js', array('dom-parser-extension-js'), '1.0.0', true);
        wp_enqueue_script( 'parsleyjs', get_template_directory_uri() . $asset_dir . '/js/parsley.min.js', array('jquery-3-5-1'), '1.0.0', true);
        wp_enqueue_script( 'contact-page-bundle', get_template_directory_uri() . $asset_dir . '/js/contact-script.bundle.js', array('parsleyjs', 'modernizer-js'), '1.0.0', true);
    } elseif(is_page(array('talent-hunt'))){
        wp_enqueue_style( 'talent-hunt-css', get_template_directory_uri() . $asset_dir . '/css/talent-hunt.css', array('font-awesome-css'), false, false);
        wp_enqueue_script( 'talent-hunt-page-bundle', get_template_directory_uri() . $asset_dir . '/js/talent-hunt-script.bundle.js', array('modernizer-js'), '1.0.0', true);
    }

    wp_enqueue_style('wolfsbane_styles', get_stylesheet_uri());
}
add_action( 'wp_enqueue_scripts', 'wolfsbane_scripts' );


// Add specific CSS class by filter.
add_filter('body_class', function($classes) {
    if (is_page('home')) {
        $classes[] = 'o-page--home home';
    } elseif (is_page('studio')) {
        $classes[] = 'o-page--subpage o-page--studio studio';
    } elseif (is_page('music')) {
        $classes[] = 'o-page--subpage o-page--music music';
    } elseif (is_page('about')) {
        $classes[] = 'o-page--subpage o-page--about about';
    } elseif (is_page('contact')) {
        $classes[] = 'o-page--subpage o-page--contact contact';
    } elseif (is_page('talent-hunt')) {
        $classes[] = 'o-page--subpage o-page--talent-hunt talent-hunt';
    }
    
    return array_merge($classes, array('o-page'));
});


function body_attribute() {
    $attrs = array();
    $output = '';

    if (is_page('home')) {
        $attrs = array('data-nav-primary-active-menu-id' => 'home');
    } elseif (is_page('studio')) {
        $attrs = array('data-nav-primary-active-menu-id' => 'studio');
    } elseif (is_page('music')) {
        $attrs = array('data-nav-primary-active-menu-id' => 'music');
    } elseif (is_page('about')) {
        $attrs = array('data-nav-primary-active-menu-id' => 'about');
    } elseif (is_page('contact')) {
        $attrs = array('data-nav-primary-active-menu-id' => 'contact');
    } elseif (is_page('talent-hunt')) {
        $attrs = array('data-nav-primary-active-menu-id' => 'talent-hunt');
    }

    foreach($attrs as $key => $attr) {
        $output .= $key . '="' . $attr . '" ';
    }
    
    echo $output;
}

if (!function_exists('wolfsbane_features')) {
    function wolfsbane_features() {
        // let wordpress handle the Title tags
        add_theme_support('title-tag');
    }
}
add_action('after_setup_theme', 'wolfsbane_features');

function wolfsbane_register_menus() {
    register_nav_menus(array(
        'header-nav' => __('Header Menu'),
        'hamburger-nav-instance' => __('Hamburger Menu'),
        'footer-services-nav' => __('Footer Services Menu'),
        'footer-sitemap-one-nav' => __('Footer Sitemap One Menu'),
        'footer-sitemap-two-nav' => __('Footer Sitemap Two Menu')
    ));
}
add_action('after_setup_theme', 'wolfsbane_register_menus');

require_once get_template_directory() . '/inc/walker-header-nav-bootstrap.php';
require_once get_template_directory() . '/inc/walker-footer-services-nav-bootstrap.php';


// remove version from head
remove_action('wp_head', 'wp_generator');

// remove version from rss
add_filter('the_generator', '__return_empty_string');

// remove version from scripts and styles
function shapeSpace_remove_version_scripts_styles($src) {
	if (strpos($src, 'ver=')) {
		$src = remove_query_arg('ver', $src);
	}
	return $src;
}
add_filter('style_loader_src', 'shapeSpace_remove_version_scripts_styles', 9999);
add_filter('script_loader_src', 'shapeSpace_remove_version_scripts_styles', 9999);

function is_wolfsbane_admin_plugin_active() {
    // return is_plugin_active( 'wolfsbane-admin/wolfsbane-admin-plugin.php' );
    return in_array('wolfsbane-admin/wolfsbane-admin-plugin.php', apply_filters('active_plugins', get_option('active_plugins')));
}


// hide update notifications
function remove_core_updates(){
    global $wp_version;
    return (object)array('last_checked' => time(), 'version_checked' => $wp_version);
}
add_filter('pre_site_transient_update_core','remove_core_updates'); //hide updates for WordPress itself
add_filter('pre_site_transient_update_plugins','remove_core_updates'); //hide updates for all plugins
add_filter('pre_site_transient_update_themes','remove_core_updates'); //hide updates for all themes
