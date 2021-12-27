<?php

    /* Collection of Walker Classes */

    class Walker_Bootstrap_Footer_Services_Nav extends Walker_Nav_Menu {

        private $class_prefix;

        function __construct($class_prefix) {
            $this->class_prefix = $class_prefix;
        }

        function start_lvl(&$output, $depth = 0, $args = array()) { // ul
            $indent = str_repeat("\t", $depth);
            $submenu = ($depth > 0)? ' sub-menu' : '';
            $output .= "\n$indent<ul class='" . $this->class_prefix . "__level-2'>\n";

            /* if ($depth < 0) {
                $output .= "\n$indent<ul class=\"dropdown-menu$submenu depth_$depth\">\n";
            } else {
                $output .= "\n$indent<div class=\"dropdown-menu depth_$depth\" aria-labelledby=\"navbarDropdown\">\n";
            } */
        }

        function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) { // li a span
            // echo $depth . "---- 2";
            $indent = ($depth > 0 ? str_repeat("\t", $depth) : '');

            $li_attributes = '';
            $class_names = $value = '';

            $classes = empty($item->classes) ? array() : (array)$item->classes;
            /* echo '<pre>';
            print_r($classes);
            echo '</pre>'; */

            if (!in_array('menu-item-has-children', $item->classes) && $depth > 0) {
                $classes[] = " " . $this->class_prefix . "__item-level-" . ($depth + 1);
            } else {
                $classes[] = $this->class_prefix . "__item";
            }
            $classes[] = ($args->walker->has_children) ? $this->class_prefix . "__item--has-childen" : "";
            $classes[] = ($item->current || $item->current_item_anchestor) ? $this->class_prefix . "__item--active" : "";
            $classes[] = $this->class_prefix . "__item--" . $item->ID;

            if ($depth && $args->walker->has_children) {
                $classes[] = $this->class_prefix . "__item--has-childen " . $this->class_prefix . "__item--second-submenu";
            }


            $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
            $class_names = ' class="' . esc_attr($class_names) . '"';

            $page_slug = get_post_field('post_name', $item->object_id);

            $id = apply_filters('nav_menu_item_id', $page_slug, $item, $args);
            $id = strlen($id)  > 0 ? ' id="' . esc_attr($id) . '"' : '';

            $output .= $indent . '<li' . $id . $value . $class_names . $li_attributes . '>';
            /* if ($depth === 0) {
                
            } */

            // Link Attributes
            $attributes = !empty($item->attr_title) ? ' title="' . esc_attr($item->attr_title) . '"' : '';
            $attributes .= !empty($item->target) ? ' target="' . esc_attr($item->target) . '"' : '';
            $attributes .= !empty($item->xfn) ? ' rel="' . esc_attr($item->xfn) . '"' : '';

            if (!in_array('menu-item-has-children', $item->classes)) {
                $attributes .= !empty($item->url) ? ' href="' . esc_attr($item->url) . '"' : '';
                $attributes .= (' class="' . (($depth > 0) ? " " . $this->class_prefix . "__link-level-" . ($depth + 1) : " " . $this->class_prefix . "__link")) . '"';
            } else {
                $attributes .= !empty($item->url) ? ' href="' . esc_attr($item->url) . '"' : '';
                $attributes .= ' class="' . $this->class_prefix . '__link ' . $this->class_prefix . '__link--has-childen" ';
            }

            $item_output = $args->before;
            $item_output .= '<a' . $attributes . '>';
            $item_output .= $args->link_before;
            $item_output .= apply_filters('the_title', $item->title, $item->ID);
            $item_output .= $args->link_after;
            $item_output .= '</a>';
            $item_output .= $args->after;

            $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
        }

        function end_el(&$output, $item, $depth = 0, $args = array()) { // closing li a span
            // echo $depth . "---- 3";
            $indent = str_repeat( "\t", !empty($depth) && is_long($depth) ? $depth : 1 );
            if ($depth === 0) {
                $output .= "</li>\n";
            }
        }

        function end_lvl(&$output, $depth = 0, $args = array()) { // closing ul
            // echo $depth . "---- 4";
            $indent = str_repeat( "\t", $depth );
            if ($depth == 0) {
                $output .= "\n$indent</ul>";
            } else {
                $output .= "\n$indent</ul>";
            }
        }
    }