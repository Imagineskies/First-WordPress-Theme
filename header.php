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


    <div id="mainSideMenuM">
      <div id="mainSideContentM">
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
        <div class="btn" onclick="exitSideMenu()">
          &otimes;
        </div>

        <ul class="nav flex-column">
          <?php bootstrap_nav(); ?>
        </ul>

      </div>
    </div>


    <?php if ( get_header_image() ) : ?>
      <div id="site-header">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
          <img src="<?php header_image(); ?>" width="<?php echo absint( get_custom_header()->width ); ?>" height="<?php echo absint( get_custom_header()->height ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>">
        </a>
      </div>
    <?php endif; ?>


      <div class="site-content-contain">
        <div id="content" class="site-content">
