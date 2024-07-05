// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Our Markdown files will have the .svx extension
	// Consult the mdsvex documentation if you want to customize this
	preprocess: [vitePreprocess(), mdsvex()],
	extensions: ['.svelte', '.svx'],

	kit: {
		adapter: adapter(
			{
				fallback: null // We want everything to be static! No SPA fallback.
			}
		)
	}
};

export default config;