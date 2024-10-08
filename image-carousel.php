<?php
/**
 * Plugin Name:       CTC Image Carousel
 * Description:       Block to create image carousel
 * Requires at least: 6.6
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            UjW0L
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       image-carousel
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function image_carousel_image_carousel_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'image_carousel_image_carousel_block_init' );
