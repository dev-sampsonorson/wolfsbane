<?php
/**
 * @package Wolfsbane Admin Plugin
 */

class ContactFormCallbacks extends BaseController
{

    protected $controller;

    public function __construct($controller)
    {
        parent::__construct();

        $this->controller = $controller;
    }

    public function renderContactForm()
    {
        if(!is_page(array(WB_CONTACT_PAGE_SLUG))) return;

        // enqueue scripts here

        $controller = $this->controller;

        ob_start();
        require_once($this->modules_path . "ContactForm/Views/ContactForm.php");
        return ob_get_clean();
    }

    public function renderContactPageAddressBox($post)
    {
        wp_nonce_field(WB_CONTACT_PAGE_INFO_METABOX_ACTION, WB_CONTACT_PAGE_INFO_METABOX_ACTION);
        $value = get_post_meta($post->ID, WB_CONTACT_PAGE_INFO_METABOX_KEY, true);
        ?>
<div class="components-base-control">
    <div class="components-base-control__field">
        <p class="post-attributes-label-wrapper wolfsbane-contact-address-label-wrapper">
            <label class="post-attributes-label" for="wolfsbane-contact-address-line-1">Address Line 1</label>
        </p>
        <input name="wolfsbane-contact-address-line-1" id="wolfsbane-contact-address-line-1" type="text" size="12"
               value="<?php echo (isset($value) && is_array($value) && count($value) > 0 && isset($value['address_line_1']) ? esc_attr($value['address_line_1']) : ""); ?>">
    </div>
    <div class="components-base-control__field">
        <p class="post-attributes-label-wrapper wolfsbane-contact-address-label-wrapper">
            <label class="post-attributes-label" for="wolfsbane-contact-address-line-2">Address Line 2</label>
        </p>
        <input name="wolfsbane-contact-address-line-2" id="wolfsbane-contact-address-line-2" type="text" size="12"
               value="<?php echo (isset($value) && is_array($value) && count($value) > 0 && isset($value['address_line_2']) ? esc_attr($value['address_line_2']) : ""); ?>">
    </div>
    <div class="components-base-control__field">
        <p class="post-attributes-label-wrapper wolfsbane-contact-address-label-wrapper">
            <label class="post-attributes-label" for="wolfsbane-contact-phone">Phone Number</label>
        </p>
        <input name="wolfsbane-contact-phone" id="wolfsbane-contact-phone" type="text" size="12"
               value="<?php echo (isset($value) && is_array($value) && count($value) > 0 && isset($value['phoneNumber']) ? esc_attr($value['phoneNumber']) : ""); ?>">
    </div>
    <div class="components-base-control__field">
        <p class="post-attributes-label-wrapper wolfsbane-contact-address-label-wrapper">
            <label class="post-attributes-label" for="wolfsbane-contact-email">Email Address</label>
        </p>
        <input name="wolfsbane-contact-email" id="wolfsbane-contact-email" type="text" size="12"
               value="<?php echo (isset($value) && is_array($value) && count($value) > 0 && isset($value['emailAddress']) ? esc_attr($value['emailAddress']) : ""); ?>">
    </div>
    <div class="components-base-control__field">
        <p class="post-attributes-label-wrapper wolfsbane-contact-address-label-wrapper">
            <label class="post-attributes-label" for="wolfsbane-contact-facebook">Facebook Url</label>
        </p>
        <input name="wolfsbane-contact-facebook" id="wolfsbane-contact-facebook" type="text" size="12"
               value="<?php echo (isset($value) && is_array($value) && count($value) > 0 && isset($value['facebookUrl']) ? esc_attr($value['facebookUrl']) : ""); ?>">
    </div>
    <div class="components-base-control__field">
        <p class="post-attributes-label-wrapper wolfsbane-contact-address-label-wrapper">
            <label class="post-attributes-label" for="wolfsbane-contact-twitter">Twitter Url</label>
        </p>
        <input name="wolfsbane-contact-twitter" id="wolfsbane-contact-twitter" type="text" size="12"
               value="<?php echo (isset($value) && is_array($value) && count($value) > 0 && isset($value['twitterUrl']) ? esc_attr($value['twitterUrl']) : ""); ?>">
    </div>
    <div class="components-base-control__field">
        <p class="post-attributes-label-wrapper wolfsbane-contact-address-label-wrapper">
            <label class="post-attributes-label" for="wolfsbane-contact-instagram">Instagram Url</label>
        </p>
        <input name="wolfsbane-contact-instagram" id="wolfsbane-contact-instagram" type="text" size="12"
               value="<?php echo (isset($value) && is_array($value) && count($value) > 0 && isset($value['instagramUrl']) ? esc_attr($value['instagramUrl']) : ""); ?>">
    </div>
    <div class="components-base-control__field">
        <p class="post-attributes-label-wrapper wolfsbane-contact-address-label-wrapper">
            <label class="post-attributes-label" for="wolfsbane-contact-youtube">YouTube Url</label>
        </p>
        <input name="wolfsbane-contact-youtube" id="wolfsbane-contact-youtube" type="text" size="12"
               value="<?php echo (isset($value) && is_array($value) && count($value) > 0 && isset($value['youTubeUrl']) ? esc_attr($value['youTubeUrl']) : ""); ?>">
    </div>
    <div class="components-base-control__field">
        <p class="post-attributes-label-wrapper wolfsbane-contact-address-label-wrapper">
            <label class="post-attributes-label" for="wolfsbane-contact-tiktok">TikTok Url</label>
        </p>
        <input name="wolfsbane-contact-tiktok" id="wolfsbane-contact-tiktok" type="text" size="12"
               value="<?php echo (isset($value) && is_array($value) && count($value) > 0 && isset($value['tikTokUrl']) ? esc_attr($value['tikTokUrl']) : ""); ?>">
    </div>
</div>


<?php

    }

}
