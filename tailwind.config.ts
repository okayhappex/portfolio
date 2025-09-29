import type { Config } from 'tailwindcss'

export default {
	content: ['index.html', './src/**/*.{vue,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Rubik"', 'sans-serif']
			},
			screens: {
				'xs': '480px'
			},
			colors: {
				'background': {
					'dark': '#07141b',
					'light': '#ffffff'
				},
				'primary': '#f60939',
				'secondary': '#ff5c26'
			}
		},
	},
	plugins: [],
} satisfies Config