/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inconsolata"],
			},
			colors: {
				light: "#f0f0f0",
				dark: "#080808",
				gray: "#6b7280",
			}
		},
	},
	plugins: [],
}
