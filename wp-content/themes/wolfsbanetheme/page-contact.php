<?php

/* Template Name: Contact Page Template */

get_header();
?>
    <?php get_template_part('template-parts/contact/contact', 'hero'); ?>   
    <main class="o-page-layout__content">
        <div class="c-contact-content-layout">
            <div class="c-contact-content-layout__info">
                <?php get_template_part('template-parts/contact/contact', 'info'); ?>  
            </div>
            <div class="c-contact-content-layout__form">
                <?php
                    if ( have_posts() ) {
                        while ( have_posts() ) {
                            the_post();
                            the_content();
                        }
                    }
                ?>
                <?php //get_template_part('template-parts/contact/contact', 'form'); ?>  
            </div>
        </div>
    </main>
<?php get_footer(); ?>