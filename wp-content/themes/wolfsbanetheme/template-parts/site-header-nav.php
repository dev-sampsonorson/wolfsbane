<nav id="nav-primary" class="c-nav-primary c-page-header__nav">
                    <?php 
                    wp_nav_menu(array(
                        'theme_location' => 'header-nav', 
                        'container' => false,
                        'menu_class' => 'c-nav-primary__container',
                        'link_before' => '<span class="c-nav-primary__title">',
                        'link_after' => '</span>',
                        'walker' => new Walker_Bootstrap_Header_Nav('c-nav-primary')
                        )
                    );
                    ?>
                    <div class="c-hamburger-menu c-nav-primary__hamburger">
                        <div class="c-hamburger-menu__overlay">

                        <?php 
                    wp_nav_menu(array(
                        'theme_location' => 'hamburger-nav-instance', 
                        'container' => false,
                        'menu_class' => 'c-hamburger-menu__instance',
                        'link_before' => '<span class="c-hamburger-menu__title">',
                        'link_after' => '</span>',
                        'walker' => new Walker_Bootstrap_Header_Nav('c-hamburger-menu')
                        )
                    );

                    ?>
                            
                        </div>
                        <div id="nav-primary-hamburger" class="c-hamburger-toggler">
                            <div class="c-hamburger-toggler__line c-hamburger-toggler__line-one"></div>
                            <div class="c-hamburger-toggler__line c-hamburger-toggler__line-two"></div>
                            <div class="c-hamburger-toggler__line c-hamburger-toggler__line-three"></div>
                        </div>

                    </div>
                </nav>