<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wolfsbane1' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'password' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '9$0exPZH7tXMJNW+_!Qr[lD,P16syh$=+]7$tt-H5$4:kYx<{/8oR0i{s1}FS|+>' );
define( 'SECURE_AUTH_KEY',  '-evux}m%OWX;tVgkHw3g-zA3Kdp:n6hD#8N6a((*4H$/;P8!-e!2*a:zo,3tXUy.' );
define( 'LOGGED_IN_KEY',    '0x0t*%PFn$,2m@_w&t6Z>BzD^`PE&bp99X.$rv):#).};DaGsOM)-$k#V{{CgV]S' );
define( 'NONCE_KEY',        '~T`A<of;-v(n1cyc8aC/G08DF-i8aPH G5^wja.9r|(1}%]Uq*g:CcGtZ4(cG)7n' );
define( 'AUTH_SALT',        '4ch7|l! n@Y.d<N=y5M!*5J2-CWsd@/X!umsKa6W+9b~4:dp2K/+IIO111s-i/u,' );
define( 'SECURE_AUTH_SALT', 'Ufz}NpukW7,*C%6JcdQh3!b<~vjoqYr}MB-Rg>aGg4DDG~G~ZxtD/+;AqZIs,%eN' );
define( 'LOGGED_IN_SALT',   'OONVm<1Nm{3Fc*vvj}k%cX#9it0L.-Vu@rU@cp~)Boz, B,{EQ3/[er!#`sKOq@-' );
define( 'NONCE_SALT',       '(FN3x/^rA)J83QKA~r8BK^;=j.#,z>t jB9^+soM`CH~#g/VlQD0#Y-izU#`!sD(' );

/**#@-*/

/**
 * WordPress Database Table prefix.
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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

define( 'WP_DEBUG_LOG', true );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
