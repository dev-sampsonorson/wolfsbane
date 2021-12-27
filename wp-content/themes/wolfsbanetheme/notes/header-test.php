<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?> <?php body_attribute(); ?>>

<?php 
                    wp_nav_menu(array(
                        'theme_location' => 'header-nav', 
                        'container' => false,
                        'menu_class' => 'c-nav-primary__container',
                        'link_before' => '<span class="c-nav-primary__title">',
                        'link_after' => '</span>',
                        'walker' => new Walker_Bootstrap_Nav_Primary()
                        )
                    );
                    
                        /* wp_nav_menu(array(
                            'theme_location' => 'header-nav'
                        )); */
                    ?>