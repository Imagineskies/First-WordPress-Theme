<?php
/**
 * Pulcherrimum: Customizer
 *
 * @package WordPress
 * @subpackage Pulcherrimum
 * @since 1.0
 */
get_header(); ?>

<div id="primary" class="content-area">
  <main id="main" class="site-main" role="main">

    <div class="container sunset-posts-container">

      <?php

        if ( have_posts() ) :

           echo '<div class="page-limit" data-page="/' . pulcherrimum_check_paged() . '">';

           while ( have_posts() ) : the_post();

           get_template_part( 'template-parts/content', get_post_format() );

           comments_template();

         endwhile;

         echo '</div>';

       endif;

       get_template_part( 'nav', 'below' );

      ?>

    </div><!-- .container -->


  </main>
</div><!-- #primary -->

<?php get_footer(); ?>
