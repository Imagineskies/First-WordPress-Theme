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

   <section id="category">
     <div class="container">
       <div class="row d-flex align-items-center">
         <div class="col-lg-10 mx-auto d-flex justify-content-center">
           <h2><?php single_cat_title('Currently Browsing '); ?></h2>

           

         </div>
       </div>
     </div>
   </section><!-- #category -->

  </main>
</div><!-- #primary -->

<?php get_footer(); ?>
