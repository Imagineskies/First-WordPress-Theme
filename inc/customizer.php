<?php
/**
 * The customizer
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

add_action('customize_register', 'pulcherrimum_customize_register');
function pulcherrimum_customize_register($wp_customize){

     $wp_customize->remove_section('colors');

     // Color Scheme Controls

     $wp_customize->add_section(
         "pulcherrimum-colors",
         array(
           'title'            => __('Color Theme', 'pulcherrimum'),
           'priority'         => 2,
           'description'      => '',
       )
     );

     // Background Colors

     $wp_customize->add_setting(
       "pulcherrimum-bgcolor",
       array(
         'default'             => '#0D1313',
         'capability'          => 'edit_theme_options',
         'type'                => 'theme_mod',
     )
   );

     $wp_customize->add_control(
       'pulcherrimum-bgcolor-control',
       array(
         'label'               => __('Background Color', 'pulcherrimum'),
         'section'             => 'pulcherrimum-colors',
         'settings'            => 'pulcherrimum-bgcolor',
    ));

    // Text Colors

    $wp_customize->add_setting(
      "pulcherrimum-textcolor",
      array(
        'default'             => '#B4AA97',
        'capability'          => 'edit_theme_options',
        'type'                => 'theme_mod',
    )
  );

    $wp_customize->add_control(
      'pulcherrimum-textcolor-control',
      array(
        'label'               => __('Paragraph Color', 'pulcherrimum'),
        'section'             => 'pulcherrimum-colors',
        'settings'            => 'pulcherrimum-textcolor',
   ));

   // Header Colors

   $wp_customize->add_setting(
     "pulcherrimum-headercolor",
     array(
       'default'             => '#833721',
       'capability'          => 'edit_theme_options',
       'type'                => 'theme_mod',
   )
 );

   $wp_customize->add_control(
     'pulcherrimum-headercolor-control',
     array(
       'label'               => __('Header Color', 'pulcherrimum'),
       'section'             => 'pulcherrimum-colors',
       'settings'            => 'pulcherrimum-headercolor',
  ));

}

/*
 * Let WordPress manage the document title.
 * By adding theme support, we declare that this theme does not use a
 * hard-coded <title> tag in the document head, and expect WordPress to
 * provide it for us.
 */
add_theme_support('title-tag');
// Add default posts and comments RSS feed links to head.
add_theme_support('automatic-feed-links');
/*
 * Enable support for Post Thumbnails on posts and pages.
 *
 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
 */
add_theme_support('post-thumbnails');

add_theme_support('html5', array( 'search-form' ));

// Set the default content width.
$GLOBALS['content_with'] = 1920;

register_nav_menus(
  array(
   'primary' => esc_html__('Primary Menu', 'pulcherrimum'),
  )
);

/*
 * Switch default core markup for search form, comment form, and comments
 * to output valid HTML5.
 */
add_theme_support(
  'html5',
  array(
    'comment-form',
    'comment-list',
    'gallery',
    'caption',
    'script',
    'style',
  )
);

/*
 * Enable support for Post Formats.
 *
 * See: https://wordpress.org/support/article/post-formats/
 */
add_theme_support(
  'post-formats',
  array(
    'aside',
    'image',
    'video',
    'quote',
    'link',
    'gallery',
    'audio',
  )
);

// Add theme support for Custom Logo.
add_theme_support(
  'custom-logo',
  array(
    'width'      => 250,
    'height'     => 250,
    'flex-width' => true,
  )
);

// Add theme support for selective refresh for widgets.
add_theme_support( 'customize-selective-refresh-widgets' );

// Load default block styles.
add_theme_support( 'wp-block-styles' );

// Add support for responsive embeds.
add_theme_support( 'responsive-embeds' );

add_theme_support('custom-header');
  // Custom Header
  function pulcherrimum_custom_header_setup() {
    $header_image = array(
    // Default Header Image to display
    'default-image'           => get_template_directory_uri() . '/assets/img/background.jpg',
    // Display the header text along with the image
    'header-text'             => false,
    // Header text color default
    'default-text-color'      => '000',
    // Header image width (in pixels)
    'width'                   => 1920,
    // Header image flex width
    'flex-width'              => true,
    // Header image height (in pixels)
    'height'                  => 1080,
    // Header image flex height
    'flex-height'              => true,
    // Header image random rotation default
    'random-default'          => false,
    // Enable upload of image file in admin
    'uploads'                 => false,
    );
    add_theme_support( 'custom-header', $header_image );
  }
  add_action( 'after_setup_theme', 'pulcherrimum_custom_header_setup' );
 ?>
