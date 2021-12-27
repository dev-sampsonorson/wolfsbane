<?php
/**
 * Wolfsbane Admin Plugin functions and definitions
 *
 *
 * @package Wolfsbane
 */




function getContactInfo() {
    if (!is_wolfsbane_admin_plugin_active()) return "";

    global $post;
    return get_post_meta($post->ID, WB_CONTACT_PAGE_INFO_METABOX_KEY, true);
}

function getContactAddressLine1() {
    if (!is_wolfsbane_admin_plugin_active()) return "";

    $value = getContactInfo();
    if(isset($value) && is_array($value) && count($value) > 0 && isset($value['address_line_1'])) {
        return $value['address_line_1'];
    }

    return "";
}

function getContactAddressLine2() {
    if (!is_wolfsbane_admin_plugin_active()) return "";

    $value = getContactInfo();
    if(isset($value) && is_array($value) && count($value) > 0 && isset($value['address_line_2'])) {
        return $value['address_line_2'];
    }

    return "";
}

function getContactPhoneNumber() {
    if (!is_wolfsbane_admin_plugin_active()) return "";
    
    $value = getContactInfo();
    if(isset($value) && is_array($value) && count($value) > 0 && isset($value['phoneNumber'])) {
        return $value['phoneNumber'];
    }

    return "";
}

function getContactEmailAddress() {
    if (!is_wolfsbane_admin_plugin_active()) return "";
    
    $value = getContactInfo();
    if(isset($value) && is_array($value) && count($value) > 0 && isset($value['emailAddress'])) {
        return $value['emailAddress'];
    }

    return "";
}

function getContactFacebookUrl() {
    if (!is_wolfsbane_admin_plugin_active()) return "";
    
    $value = getContactInfo();
    if(isset($value) && is_array($value) && count($value) > 0 && isset($value['facebookUrl'])) {
        return $value['facebookUrl'];
    }

    return "";
}

function getContactTwitterUrl() {
    if (!is_wolfsbane_admin_plugin_active()) return "";
    
    $value = getContactInfo();
    if(isset($value) && is_array($value) && count($value) > 0 && isset($value['twitterUrl'])) {
        return $value['twitterUrl'];
    }

    return "";
}

function getContactInstagramUrl() {
    if (!is_wolfsbane_admin_plugin_active()) return "";
    
    $value = getContactInfo();
    if(isset($value) && is_array($value) && count($value) > 0 && isset($value['instagramUrl'])) {
        return $value['instagramUrl'];
    }

    return "";
}

function getContactYouTubeUrl() {
    if (!is_wolfsbane_admin_plugin_active()) return "";
    
    $value = getContactInfo();
    if(isset($value) && is_array($value) && count($value) > 0 && isset($value['youTubeUrl'])) {
        return $value['youTubeUrl'];
    }

    return "";
}

function getContactTikTokUrl() {
    if (!is_wolfsbane_admin_plugin_active()) return "";
    
    $value = getContactInfo();
    if(isset($value) && is_array($value) && count($value) > 0 && isset($value['tikTokUrl'])) {
        return $value['tikTokUrl'];
    }

    return "";
}
