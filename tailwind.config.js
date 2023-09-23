const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					light: '#f8fafc',
					DEFAULT: '#e0f2fe',
					dark: '#bae6fd',
					gray: '#e2e8f0',
				},
				accent: {
					DEFAULT: '#fcd34d',
					dark: '#fbbf24',
				},
				black: {
					DEFAULT: colors.black,
					title: '#475569',
					desc: '#64748b',
				},
			},
		},
	},
	plugins: [],
};
