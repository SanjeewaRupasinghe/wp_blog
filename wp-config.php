<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'blog' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'KLLKr>R?w%V|F8u`0$PDAHI#|[i9-dX:MM_3|5a&=bsR_T?h&369r/e4fc/U^ <1' );
define( 'SECURE_AUTH_KEY',  'iE4sO[#Q2@.kCRm{4!A0T#zHI[}.`?W=O[+qv#R,r0.%0-/S~+KHgkeh>IC@~A+5' );
define( 'LOGGED_IN_KEY',    'wGeWnyF^CZO^DY{s*[CH?!{T>4C!PU~UwS5;HvvT{fr(NCPAInfd{Ig6Sin*h|&#' );
define( 'NONCE_KEY',        'Nj8Q6UJ8:P{eyC$1ZS<mu*/S8-FHSBuE3!.l}Mal&Iio6WpslH(Q~BvNo|y8cT)L' );
define( 'AUTH_SALT',        '#[nK6.&&ABIYJ+B9LmpK$tUER1C^[CdVEUv?KL@t51R!x .RmekGKf!c[KK^3d~:' );
define( 'SECURE_AUTH_SALT', 'kpBL*QLfRUScL<Y@V~^c_,K_*__*YSiF] I1y#&ZoQL-Bi8)6xM![<%d(E|k@`,-' );
define( 'LOGGED_IN_SALT',   ':7jvoGMig9ia9p.e4of/VVdBc78#GCZbMR]W,`3Ly<L#I^z^dH,+,K0no%q{g(&t' );
define( 'NONCE_SALT',       '5-g1ntgl<.90?x&GO:VSi Qt`<@?xgljma~bo}Acx&Tt<Cqb *]>utU{TM egI[^' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
