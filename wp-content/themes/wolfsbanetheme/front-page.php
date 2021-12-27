<?php
/**
 * The front page template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * 
 * @package Wolfsbane
 */

get_header();
?>

        <?php get_template_part('template-parts/home/home', 'hero'); ?>  
        <main class="o-page-layout__content">
            <?php get_template_part('template-parts/home/home', 'value-proposition'); ?>
            
            <div class="o-page-layout__content-divider">
                <div class="c-content-divider"></div>
            </div>
            <?php get_template_part('template-parts/home/home', 'works-playlist'); ?>
            
            <?php get_template_part('template-parts/home/home', 'youtube-playlist'); ?>
            
            <?php get_template_part('template-parts/home/home', 'contact-cta'); ?>
        </main>

<?php get_footer(); ?>