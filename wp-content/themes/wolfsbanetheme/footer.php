<?php
  /* Main footer template */
?>

</div><!-- .o-page-layout -->
    <footer class="o-page-layout__footer">
        <div class="o-page-layout__footer-social">
            <?php get_template_part('template-parts/site', 'footer-social-links'); ?>
        </div>
        <div class="o-page-layout__footer-nav">
            <div class="c-footer-details">
                <div class="c-footer-details__col1">
                <?php get_template_part('template-parts/site', 'footer-details-col1'); ?>
                </div>
                <div class="c-footer-details__col2">
                <?php get_template_part('template-parts/site', 'footer-details-col2'); ?>
                </div>
                <div class="c-footer-details__col3">
                <?php get_template_part('template-parts/site', 'footer-details-col3'); ?>
                </div>
            </div>
        </div>
        <div class="o-page-layout__footer-copyright">
        <?php get_template_part('template-parts/site', 'footer-copyright'); ?>
        </div>
    </footer><!-- .o-page-layout__footer -->
<?php wp_footer(); ?>
</body>
</html>