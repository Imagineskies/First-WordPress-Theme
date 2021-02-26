<?php
/**
 * Pulcherrimum: Category
 *
 * @package WordPress
 * @subpackage Pulcherrimum
 * @since 1.0
 */
get_header(); ?>

<div id="primary" class="content-area">
  <main id="main" class="site-main" role="main">

    <div class="container sunset-posts-container">
		<div class="row">
			<div class="col-lg-2 mr-auto">
				<?php the_archive_title('<h4>', '</h4>'); ?>
			</div>
			<div class="col-lg-8 ml-auto">
				 <?php

					if ( have_posts() ) :

					   while ( have_posts() ) : the_post();

					   get_template_part( 'template-parts/content', get_post_format() );

					 endwhile;

				   endif;

				   get_template_part( 'nav', 'below' );

				  ?>
			</div>
		</div>

    </div><!-- .container -->


  </main>
</div><!-- #primary -->

<?php get_footer(); ?>
