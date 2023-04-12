export default defineNuxtConfig({
	typescript: {
		strict: false,
	},
	css: ["~/assets/css/tailwind.css", "~/assets/css/fonts.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	server: {
		hrm: {
			overlay: false,
		},
	},
});
