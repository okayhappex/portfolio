import type { Config } from 'tailwindcss'

export default {
	content: ['index.html', './src/**/*.{vue,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Alexandria"', 'sans-serif']
			},
			screens: {
				'xs': '480px'
			}
		},
	},
	plugins: [],
} satisfies Config