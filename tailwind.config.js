/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.{js,jsx,ts,tsx}", // Scans the entry point index.ts file
		"./src/**/*.{js,jsx,ts,tsx}", // Scans all .js/.jsx/.ts/.tsx files in the src directory and its subdirectories
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
