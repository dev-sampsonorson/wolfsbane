<?php

/* Template Name: Talent Hunt Page Template */

get_header();
?>
<?php get_template_part('template-parts/talent-hunt/talent-hunt', 'hero'); ?>
<main class="o-page-layout__content">
    <?php get_template_part('template-parts/talent-hunt/talent-hunt', 'beats'); ?>
    <?php get_template_part('template-parts/site', 'contact-cta'); ?>
</main>









<?php get_footer(); ?>
