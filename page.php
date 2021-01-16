<?php
/**
 * Pulcherrimum: Customizer
 *
 * @package WordPress
 * @subpackage Pulcherrimum
 * @since 1.0
 */
get_header(); ?>

<main id="content">
  <?php

  if ( have_posts() ) :

     while ( have_posts() ) :

        the_post();

  ?>
  <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <header class="header">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h1 class="entry-title text-center"><?php the_title(); ?></h1>
            <?php edit_post_link(); ?>
          </div>
        </div>
      </div>
    </header>
    <div class="entry-content text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <?php
            if ( has_post_thumbnail() ) {
              the_post_thumbnail();
            }
            the_content();
            ?>
            <div class="entry-links">
              <?php wp_link_pages(); ?>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
  <?php
  if ( comments_open() && ! post_password_required() ) {
    comments_template( '', true );
  }
  endwhile;
  endif;
  ?>
</main>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
