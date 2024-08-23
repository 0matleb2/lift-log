/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.{js,jsx,ts,tsx}", // Scans the entry point index.ts file
		"./app/**/*.{js,jsx,ts,tsx}", // Scans all .js/.jsx/.ts/.tsx files in the app directory and its subdirectories
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
