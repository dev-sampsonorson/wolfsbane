<?php

/* Template Name: Music Page Template */

get_header();
?>
    <?php get_template_part('template-parts/music/music', 'hero'); ?>
    <main class="o-page-layout__content">
            <div class="o-page-layout__works">
                <div class="c-works">
                    <?php get_template_part('template-parts/music/music', 'beats'); ?>
                    <?php get_template_part('template-parts/music/music', 'songs'); ?>
                </div>
            </div>
            <div class="o-page-layout__video">
                <div id="c-video-youtube-player" class="c-video">
                    <?php get_template_part('template-parts/music/music', 'youtube-playlist'); ?>
                    <?php get_template_part('template-parts/music/music', 'youtube-screen'); ?>
                </div>
            </div>
            
            <?php get_template_part('template-parts/site', 'contact-cta'); ?>
    </main>

    <form id="music-page-playlist-form" action="#" method="post" data-url="<?php echo admin_url('admin-ajax.php'); ?>">             
        <input type="hidden" id="get_media_playlist_by_type_nonce" name="get_media_playlist_by_type_nonce"
            value="<?php echo wp_create_nonce("get_media_playlist_by_type_nonce"); ?>">
    </form>






<?php get_footer(); ?>