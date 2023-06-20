import { getConfig } from '@shgysk8zer0/js-utils/rollup';

export default getConfig('./http-status.js', {
	format: 'cjs',
	minify: false,
	sourcemap: false,
	external: [],
});
