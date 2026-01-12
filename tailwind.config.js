/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		"**/*.{html, jsx, js}",
		"**/*.js",
		"**/*.html",
	],
	theme: {
		extend: {
			colors: {
				primary: "#1e293b", // Navy blue
				secondary: "#f5f5dc" // Beige
			}
		},
	},
	plugins: [],
}

