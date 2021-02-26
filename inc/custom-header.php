<?php
/**
 * Custom header implementation
 *
 * @link https://codex.wordpress.org/Custom_Headers
 *
 * @package WordPress
 * @subpackage pulcherrimum
 * @since pulcherrimum 1.0
 */

/**
 * Set up the WordPress core custom header feature.
 *
 * @uses pulcherrimum_header_style()
 */
function pulcherrimum_custom_header_setup() {

	add_theme_support(
		'custom-header',
		/**
		 * Filter pulcherrimum custom-header support arguments.
		 *
		 * @since pulcherrimum 1.0
		 *
		 * @param array $args {
		 *     An array of custom-header support arguments.
		 *
		 *     @type string $default-image    Default image of the header.
		 *     @type int    $width            Width in pixels of the custom header image. Default 954.
		 *     @type int    $height           Height in pixels of the custom header image. Default 1300.
		 *     @type string $flex-height      Flex support for height of header.
		 *     @type string $video            Video support for header.
		 *     @type string $wp-head-callback Callback function used to styles the header image and text
		 *                                    displayed on the blog.
		 * }
		 */
		apply_filters(
			'pulcherrimum_custom_header_args',
			array(
				'default-image'    => get_parent_theme_file_uri( '/assets/images/header.jpg' ),
				'width'            => 1920,
				'height'           => 1080,
				'flex-height'      => true,
				'video'            => true,
				'wp-head-callback' => 'pulcherrimum_header_style',
			)
		)
	);

	register_default_headers(
		array(
			'default-image' => array(
				'url'           => '%s/assets/images/header.jpg',
				'thumbnail_url' => '%s/assets/images/header.jpg',
				'description'   => __( 'Default Header Image', 'pulcherrimum' ),
			),
		)
	);
}
add_action( 'after_setup_theme', 'pulcherrimum_custom_header_setup' );

/**
 * Customize video play/pause button in the custom header.
 *
 * @param array $settings Video settings.
 * @return array The filtered video settings.
 */
function pulcherrimum_video_controls( $settings ) {
	$settings['l10n']['play']  = '<span class="screen-reader-text">' . __( 'Play background video', 'pulcherrimum' ) . '</span>' . pulcherrimum_get_svg( array( 'icon' => 'play' ) );
	$settings['l10n']['pause'] = '<span class="screen-reader-text">' . __( 'Pause background video', 'pulcherrimum' ) . '</span>' . pulcherrimum_get_svg( array( 'icon' => 'pause' ) );
	return $settings;
}
add_filter( 'header_video_settings', 'pulcherrimum_video_controls' );
