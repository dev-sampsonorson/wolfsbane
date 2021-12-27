<?php

/* Template Name: Studio Page Template */

get_header();
?>

    <?php get_template_part('template-parts/studio/studio', 'hero'); ?>
    <main class="o-page-layout__content">
        <?php get_template_part('template-parts/studio/studio', 'featured'); ?>
        <div class="o-page-layout__content-section">
            <?php get_template_part('template-parts/studio/studio', 'two'); ?>
            <?php get_template_part('template-parts/studio/studio', 'three'); ?>
        </div>
    </main>







<?php get_footer(); ?>