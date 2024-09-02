/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			primary: '#5091CD',
			secondary: '#A67E59',
			tertiary: '#572802',
			dark: '#130900',
			light: '#F0F8FF',
			white: '#FFFFFF',
		},
	},
	plugins: [],
};
