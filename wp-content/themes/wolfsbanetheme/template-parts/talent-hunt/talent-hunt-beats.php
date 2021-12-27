<div class="o-page-layout__works">
    <div class="c-downloadable-beats">
        <div class="c-downloadable-beats__list">
            <h5 class="c-downloadable-beats__title c-downloadable-beats__title--center-align">Our Beats</h5>
            <ul id="talent-hunt-beats" class="c-medialist"></ul>
        </div>
    </div>
</div>
<form id="downloadable-beats-form" action="#" method="post" data-url="<?php echo admin_url('admin-ajax.php'); ?>">
    <input type="hidden" id="get_media_playlist_by_type_and_location_nonce"
           name="get_media_playlist_by_type_and_location_nonce"
           value="<?php echo wp_create_nonce("get_media_playlist_by_type_and_location_nonce"); ?>">
</form>
