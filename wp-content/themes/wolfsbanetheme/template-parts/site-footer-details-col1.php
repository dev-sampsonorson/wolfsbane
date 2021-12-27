<div class="c-footer-links-services">
                        <h6 class="c-footer-links-services__title">Our Services</h6>

                        <?php
                        wp_nav_menu(array(
                        'theme_location' => 'footer-services-nav', 
                        'container' => false,
                        'menu_class' => 'c-footer-links-services__container',
                        'walker' => new Walker_Bootstrap_Footer_Services_Nav("c-footer-links-services")
                        ));
                        ?>
                    </div>