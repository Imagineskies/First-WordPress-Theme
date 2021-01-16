<?php
// Register Custom Navigation Walker
require_once(get_template_directory() . '/wp_bootstrap_navwalker.php');

// Bootstrap navigation
function bootstrap_nav()
{
	wp_nav_menu( array(
            'theme_location'    => 'header-menu',
            'depth'             => 2,
            'container'         => 'false',
            'menu_class'        => 'nav navbar-nav',
            'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
            'walker'            => new wp_bootstrap_navwalker())
    );
}

function register_header_menu() {
  register_nav_menu('header-menu',__( 'Header Menu' ));
}
add_action( 'init', 'register_header_menu' );
?>
<?php
/* Theme setup */
add_action('after_setup_theme', 'pulcherrimum_setup');
function pulcherrimum_setup() {
    /*
     * Make theme available for translation.
     * Translations can be filed at WordPress.org. See: https://translate.wordpress.org/projects/wp-themes/pulcherrimum
     * If you're building a theme based on Twenty Seventeen, use a find and replace
     * to change 'pulcherrimum' to the name of your theme in all the template files.
     */
    load_theme_textdomain('pulcherrimum', get_template_directory() . '/languages');


    add_image_size( 'pulcherrimum-featured-image', 2000, 1200, true );

    add_image_size( 'pulcherrimum-thumbnail-avatar', 100, 100, true );

    /**
     * Register custom fonts.
     */
    function pulcherrimum_fonts_url() {
    	$fonts_url = '';

    	/*
    	 * translators: If there are characters in your language that are not supported
    	 * by Libre Franklin, translate this to 'off'. Do not translate into your own language.
    	 */
    	$libre_franklin = _x( 'on', 'Libre Franklin font: on or off', 'pulcherrimum' );

    	if ( 'off' !== $libre_franklin ) {
    		$font_families = array();

    		$font_families[] = 'Libre Franklin:300,300i,400,400i,600,600i,800,800i';

    		$query_args = array(
    			'family'  => urlencode( implode( '|', $font_families ) ),
    			'subset'  => urlencode( 'latin,latin-ext' ),
    			'display' => urlencode( 'fallback' ),
    		);

    		$fonts_url = add_query_arg( $query_args, 'https://fonts.googleapis.com/css' );
    	}

    	return esc_url_raw( $fonts_url );
    }


    /**
    * Add preconnect for Google Fonts.
    *
    * @since Pulcherrimum 1.0
    *
    * @param array  $urls           URLs to print for resource hints.
    * @param string $relation_type  The relation type the URLs are printed.
    * @return array $urls           URLs to print for resource hints.
    */
    function pulcherrimum_resource_hints( $urls, $relation_type ) {
    if ( wp_style_is( 'pulcherrimum-fonts', 'queue' ) && 'preconnect' === $relation_type ) {
      $urls[] = array(
        'href' => 'https://fonts.gstatic.com',
        'crossorigin',
      );
    }

    return $urls;
    }
    add_filter( 'wp_resource_hints', 'pulcherrimum_resource_hints', 10, 2 );

/**
 * Replaces "[...]" (appended to automatically generated excerpts) with ... and
 * a 'Continue reading' link.
 *
 * @since Twenty Seventeen 1.0
 *
 * @param string $link Link to single post/page.
 * @return string 'Continue reading' link prepended with an ellipsis.
 */
function pulcherrimum_excerpt_more( $link ) {
	if ( is_admin() ) {
		return $link;
	}

	$link = sprintf(
		'<p class="link-more"><a href="%1$s" class="more-link">%2$s</a></p>',
		esc_url( get_permalink( get_the_ID() ) ),
		/* translators: %s: Post title. */
		sprintf( __( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'pulcherrimum' ), get_the_title( get_the_ID() ) )
	);
	return ' &hellip; ' . $link;
}
add_filter( 'excerpt_more', 'pulcherrimum_excerpt_more' );

/**
 * Add a pingback url auto-discovery header for singularly identifiable articles.
 */
add_action('wp_head', 'pulcherrimum_pingback_header');
function pulcherrimum_pingback_header()
{
    if (is_singular() && pings_open()) {
        printf('<link rel="pingback" href="%s" />' . "\n", esc_url(get_bloginfo('pingback_url')));
    }
}

/**
 * Handles JavaScript detection.
 *
 * Adds a `js` class to the root `<html>` element when JavaScript is detected.
 *
 * @since Twenty Seventeen 1.0
 */
function pulcherrimum_javascript_detection() {
	echo "<script>(function(html){html.className = html.className.replace(/\bno-js\b/,'js')})(document.documentElement);</script>\n";
}
add_action( 'wp_head', 'pulcherrimum_javascript_detection', 0 );

/**
* Custom Admin Page
*/
require get_template_directory() . '/inc/function-admin.php';

/**
* Customizer additions.
*/
require get_template_directory() . '/inc/customizer.php';

/**
 * Enqueues scripts and styles.
 */
function pulcherrimum_scripts() {

	// Add custom fonts, used in the main stylesheet.
	wp_enqueue_style( 'pulcherrimum-fonts', pulcherrimum_fonts_url(), array(), null );

	// Theme stylesheet.
	wp_enqueue_style( 'pulcherrimum-style', get_stylesheet_uri(), array(), '20190507' );

  // Bootstrap & Fonts
	wp_enqueue_script( 'jquery', get_theme_file_uri( '/assets/js/jquery.js' ), array( 'jquery' ), null, true );
  wp_enqueue_style( 'bootstrap-css', get_theme_file_uri( '/assets/css/bootstrap.min.css' ), array( 'pulcherrimum-style' ), '1.0.0' ,'all' );
  wp_enqueue_style( 'font-css', get_theme_file_uri( '/assets/css/fonts.css' ), array( 'pulcherrimum-fonts' ), null );
  wp_enqueue_script( 'bootstrap-js', get_theme_file_uri( '/assets/js/bootstrap.bundle.min.js' ), array( 'jquery' ), null, true );
  wp_enqueue_script( 'jquery-easing', get_theme_file_uri( '/assets/js/jquery.easing.min.js' ), array( 'jquery' ), null, true );
	wp_enqueue_script( 'main-js', get_theme_file_uri( '/assets/js/main.js' ), array( 'jquery' ), null, true );
}
add_action( 'wp_enqueue_scripts', 'pulcherrimum_scripts' );

/**
 * Add custom image sizes attribute to enhance responsive image functionality
 * for content images.
 *
 * @param string $sizes A source size value for use in a 'sizes' attribute.
 * @param array  $size  Image size. Accepts an array of width and height
 *                      values in pixels (in that order).
 * @return string A source size value for use in a content image 'sizes' attribute.
 */
function pulcherrimum_content_image_sizes_attr( $sizes, $size ) {
	$width = $size[0];

	if ( 740 <= $width ) {
		$sizes = '(max-width: 706px) 89vw, (max-width: 767px) 82vw, 740px';
	}

	if ( is_active_sidebar( 'sidebar-1' ) || is_archive() || is_search() || is_home() || is_page() ) {
		if ( ! ( is_page() && 'one-column' === get_theme_mod( 'page_options' ) ) && 767 <= $width ) {
			$sizes = '(max-width: 767px) 89vw, (max-width: 1000px) 54vw, (max-width: 1071px) 543px, 580px';
		}
	}

	return $sizes;
}
add_filter( 'wp_calculate_image_sizes', 'pulcherrimum_content_image_sizes_attr', 10, 2 );

/**
 * Filter the `sizes` value in the header image markup.
 *
 * @param string $html   The HTML image tag markup being filtered.
 * @param object $header The custom header object returned by 'get_custom_header()'.
 * @param array  $attr   Array of the attributes for the image tag.
 * @return string The filtered header image HTML.
 */
function pulcherrimum_header_image_tag( $html, $header, $attr ) {
	if ( isset( $attr['sizes'] ) ) {
		$html = str_replace( $attr['sizes'], '100vw', $html );
	}
	return $html;
}
add_filter( 'get_header_image_tag', 'pulcherrimum_header_image_tag', 10, 3 );


/**
 * Add custom image sizes attribute to enhance responsive image functionality
 * for post thumbnails.
 *
 * @param array $attr       Attributes for the image markup.
 * @param int   $attachment Image attachment ID.
 * @param array $size       Registered image size or flat array of height and width dimensions.
 * @return array The filtered attributes for the image markup.
 */
function pulcherrimum_post_thumbnail_sizes_attr( $attr, $attachment, $size ) {
	if ( is_archive() || is_search() || is_home() ) {
		$attr['sizes'] = '(max-width: 767px) 89vw, (max-width: 1000px) 54vw, (max-width: 1071px) 543px, 580px';
	} else {
		$attr['sizes'] = '100vw';
	}

	return $attr;
}
add_filter( 'wp_get_attachment_image_attributes', 'pulcherrimum_post_thumbnail_sizes_attr', 10, 3 );

/**
 * Use front-page.php when Front page displays is set to a static page.
 *
 * @param string $template front-page.php.
 *
 * @return string The template to be used: blank if is_home() is true (defaults to index.php), else $template.
 */
function pulcherrimum_front_page_template( $template ) {
	return is_home() ? '' : $template;
}
add_filter( 'frontpage_template', 'pulcherrimum_front_page_template' );

/**
 * Modifies tag cloud widget arguments to display all tags in the same font size
 * and use list format for better accessibility.
 *
 * @param array $args Arguments for tag cloud widget.
 * @return array The filtered arguments for tag cloud widget.
 */
function pulcherrimum_widget_tag_cloud_args( $args ) {
	$args['largest']  = 1;
	$args['smallest'] = 1;
	$args['unit']     = 'em';
	$args['format']   = 'list';

	return $args;
}
add_filter( 'widget_tag_cloud_args', 'pulcherrimum_widget_tag_cloud_args' );

/**
 * Get unique ID.
 *
 * This is a PHP implementation of Underscore's uniqueId method. A static variable
 * contains an integer that is incremented with each call. This number is returned
 * with the optional prefix. As such the returned value is not universally unique,
 * but it is unique across the life of the PHP process.
 *
 * @see wp_unique_id() Themes requiring WordPress 5.0.3 and greater should use this instead.
 *
 * @staticvar int $id_counter
 *
 * @param string $prefix Prefix for the returned ID.
 * @return string Unique ID.
 */
function pulcherrimum_unique_id( $prefix = '' ) {
	static $id_counter = 0;
	if ( function_exists( 'wp_unique_id' ) ) {
		return wp_unique_id( $prefix );
	}
	return $prefix . (string) ++$id_counter;
}
}
