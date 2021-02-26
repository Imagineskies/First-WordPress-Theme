<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Pulcherrimum
 * @since 1.0
 * @version 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <meta name="viewport" content="width=device-width" />
    <script src="https://kit.fontawesome.com/6bc827747a.js" crossorigin="anonymous"></script>
    <style type="text/css" media="screen">
      .site-content-contain {
        background-color: <?php echo get_theme_mod( 'pulcherrimum-bgcolor' );  ?> !important;
      }
      .p, .pre, p, pre {
        color: <?php echo get_theme_mod( 'pulcherrimum-textcolor' );  ?> !important;
      }
      h1, h2, h3, h4, h5, h6 {
        color: <?php echo get_theme_mod( 'pulcherrimum-headercolor' );  ?> !important;
      }

      header.masthead {
        background-image: url(<?php header_image(); ?>);
        background-position: center center;
        background-size: cover;
      }
    </style>
    <title><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
  </head>

  <body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <!-- Nav Bar for laptops -->

    <nav id="menuTemp" class="navbar navbar-expand-xl navbar-togglable navbar-one">
      <div class="container">

            <!-- Toggler -->
            <button id="navBarBtn" class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fas fa-bars"></i>
            </button>
            <!-- Collapse -->
            <div class="collapse navbar-collapse" id="navbarCollapse">

              <!-- Heading -->
              <ul class="nav navbar-nav mr-auto custom-navbar">
                <li class="navbar navbar-light">
                  <span class="navbar-brand">
                    <?php
                      // check to see if the logo exists and add it to the page
                      if ( get_theme_mod( 'your_theme_logo' ) ) : ?>

                      <img src="<?php echo get_theme_mod( 'your_theme_logo' ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" >

                      <?php // add a fallback if the logo doesn't exist
                      else : ?>

                      <?php bloginfo( 'name' ); ?>

                    <?php endif; ?>
                  </span>
                </li>
              </ul>

              <!-- Links -->
              <ul class="nav navbar-nav ml-auto custom-navbar">

                <!-- Nav Divider -->

                <li class="nav-item-divider">
                  <span class="nav-link">
                    <span></span>
                  </span>
                </li>

                <?php bootstrap_nav(); ?>

                <!-- Nav Divider -->

                <li class="nav-item-divider">
                  <span class="nav-link">
                    <span></span>
                  </span>
                </li>

              </ul>

            </div> <!-- / .navbar-collapse -->

      </div> <!-- / .container -->
    </nav>

    <header class="masthead">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="textbox d-flex justify-content-center">
            <?php if ( is_front_page() ) : ?><!-- Home -->

              <div class="col-lg-10 mx-auto">
                <?php
                  $post_id = 52;
                  $queried_post = get_post($post_id);
                ?>
                <?php echo $queried_post->post_content; ?>
              </div>

            <?php elseif ( $post->ID == 7 ) : ?> <!-- About -->

              <div class="col-lg-10 mx-auto">
                <?php
                  $post_id = 57;
                  $queried_post = get_post($post_id);
                ?>
                <?php echo $queried_post->post_content; ?>
              </div>

            <?php elseif ( $post->ID == 64 ) : ?><!-- Poems -->

              <div class="col-lg-10 mx-auto">
                <?php
                  $post_id = 60;
                  $queried_post = get_post($post_id);
                ?>
                <?php echo $queried_post->post_content; ?>
              </div>

            <?php elseif ( $post->ID == 8 ) : ?><!-- Music -->

              <div class="col-lg-10 mx-auto">
                <?php
                  $post_id = 66;
                  $queried_post = get_post($post_id);
                ?>
                <?php echo $queried_post->post_content; ?>
              </div>

            <?php elseif ( $post->ID == 9 ) : ?><!-- Sandbox -->

              <div class="col-lg-10 mx-auto">
                <?php
                  $post_id = 68;
                  $queried_post = get_post($post_id);
                ?>
                <?php echo $queried_post->post_content; ?>
              </div>

            <?php else : ?>
            <?php endif; ?>
          </div>
        </div>
      </div>
    </header>


      <div class="site-content-contain">
        <div id="content" class="site-content">
