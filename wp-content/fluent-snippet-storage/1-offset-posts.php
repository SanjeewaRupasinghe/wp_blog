<?php
// <Internal Doc Start>
/*
*
* @description: 
* @tags: 
* @group: 
* @name: Offset Posts
* @type: PHP
* @status: published
* @created_by: 
* @created_at: 
* @updated_at: 2024-05-12 04:23:01
* @is_valid: 
* @updated_by: 
* @priority: 10
* @run_at: frontend
* @load_as_file: 
* @condition: {"status":"no","run_if":"assertive","items":[[]]}
*/
?>
<?php if (!defined("ABSPATH")) { return;} // <Internal Doc End> ?>
<?php
add_filter('blocksy:general:shortcodes:blocksy-posts:args', function ($args) {	
  $args['offset'] = 3;
  return $args;
} );