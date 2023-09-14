import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	resolve: {
		alias: {
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
			'@data': path.resolve(__dirname, './src/data'),
		},
	},
	plugins: [react()],
	server: {
		open: true,
		port: 3000,
	},
	build: {
		sourcemap: true,
	},
	preview: {
		open: true,
		port: 5500,
	},
});
