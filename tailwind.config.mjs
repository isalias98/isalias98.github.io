/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Lexend Variable', ...defaultTheme.fontFamily.serif],
			  },
		},
	},
	daisyui: {
		themes: [
			{
			  mytheme: {
				"primary": "#1d2e4d",
				"secondary": "#201324",
				"accent": "#00020e",
				"base-100": "#070209",
				"info":"#e1c4bb",
			  },
			},
			"dark",
			"cupcake",
		  ],
	},
	
	plugins: [require("daisyui")],
}
