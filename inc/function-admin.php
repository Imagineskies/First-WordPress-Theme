<?php
/**
 * Pulcherrimum: Customizer
 *
 * @package WordPress
 * @subpackage Pulcherrimum
 * @since 1.0
 */
?>

<?php

 function pulcherrimum_add_admin_page() {

   add_menu_page( 'Pulcherrimum'. 'Pulcherrimum', 'manage_options', 'jbzdyqhv_pulcherrimum', 'pulcherrimum_theme_create_page', get_template_directory_uri() . '/assets/img/sunset-icon.png', 110 );
get_template_directory() . '/assets/img/pulcherrimum-icon.png';

 }
add_action( 'admin_menu', 'pulcherrimum_add_admin_page' );


 function pulcherrimum_theme_create_page() {
   // Generation of our admin page
 }

?>
