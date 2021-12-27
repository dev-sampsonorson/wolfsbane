                    <div class="c-footer-links-primary">
                        <h6 class="c-footer-links-primary__title">Map of The Site</h6>
                        <div class="c-footer-links-primary__inner">
                        <?php
                        wp_nav_menu(array(
                        'theme_location' => 'footer-sitemap-one-nav', 
                        'container' => false,
                        'menu_class' => 'c-footer-links-primary__container c-footer-links-primary__inner--col1',
                        'walker' => new Walker_Bootstrap_Footer_Services_Nav("c-footer-links-primary")
                        ));
                        ?>
                        
                        <?php
                        wp_nav_menu(array(
                        'theme_location' => 'footer-sitemap-two-nav', 
                        'container' => false,
                        'menu_class' => 'c-footer-links-company__container c-footer-links-primary__inner--col2',
                        'walker' => new Walker_Bootstrap_Footer_Services_Nav("c-footer-links-company")
                        ));
                        ?>
                        </div>
                    </div>