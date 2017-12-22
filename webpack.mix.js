const { mix } = require('laravel-mix');

/**
 * Mix CSS
 */
mix.styles([
	'node_modules/bulma/css/bulma.css'
], 'assets/css/app.css');

/**
 * Mix JS
 */
mix.scripts([
	'node_modules/jquery/dist/jquery.js'
], 'assets/js/app.js');