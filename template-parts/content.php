<?php
/**
 * Pulcherrimum: Customizer
 *
 * @package WordPress
 * @subpackage Pulcherrimum
 * @since 1.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<hr>

	<?php
	if ( is_sticky() && is_home() ) :
		echo pulcherrimum_get_svg( array( 'icon' => 'thumb-tack' ) );
	endif;
	?>

	<?php if ( '' !== get_the_post_thumbnail() && ! is_single() ) : ?>
		<div class="post-thumbnail">
			<a href="<?php the_permalink(); ?>">
				<?php the_post_thumbnail( 'pulcherrimum-featured-image' ); ?>
			</a>
		</div><!-- .post-thumbnail -->
	<?php endif; ?>

	<div class="container">
	  <div class="row entry-wrapper">
	    <div class="entry-content col-lg-10 text-left">

				<?php the_title( '<h4 class="entry-title">', '</h4>' );	?>
				<h5 class="entry-date"><?php echo get_the_date(); ?></h5>

				<?php
				the_content(
					sprintf(
						/* translators: %s: Post title. */
						__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'pulcherrimum' ),
						get_the_title()
					)
				);

				?>

	    </div>
	  </div>
	</div>

	<?php
	if ( is_single() ) {
		pulcherrimum_entry_footer();
	}
	?>

</article><!-- #post-<?php the_ID(); ?> -->
