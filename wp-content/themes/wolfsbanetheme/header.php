<?php
  /* Main header template */
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="description" content="<?php bloginfo('description') ?>">
    <title><?php bloginfo('name') ?></title>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?> <?php body_attribute(); ?>>
    <?php wp_body_open(); ?>
    <div class="o-page-layout">
        <header class="o-page-layout__header">
            <div class="c-page-header">
            <?php get_template_part('template-parts/site', 'logo'); ?>
            <?php get_template_part('template-parts/site', 'header-nav'); ?>                
            </div>
        </header>
        
        