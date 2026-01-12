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
				primary: "#0f172a", // Deep Navy
				secondary: "#fdf6e3", // Warm Beige
				notion: {
					bg: "#ffffff",
					subtle: "#f7f6f3",
					border: "#e9e9e7",
					text: "#37352f"
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			animation: {
				'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'fade-in': 'fadeIn 1s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				}
			}
		},
	},
	plugins: [],
}

