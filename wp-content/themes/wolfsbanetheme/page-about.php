<?php

/* Template Name: About Page Template */

get_header();
?>
    <?php get_template_part('template-parts/about/about', 'hero'); ?>
    <main class="o-page-layout__content">
        <?php get_template_part('template-parts/about/about', 'main-content'); ?>
        <?php get_template_part('template-parts/about/about', 'services'); ?>
        <?php get_template_part('template-parts/about/about', 'team'); ?>
        <?php get_template_part('template-parts/site', 'contact-cta'); ?>
    </main>









<?php get_footer(); ?>