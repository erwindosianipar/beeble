module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
	],
	theme: {
		extend: {},
		fontFamily: {
			sans: ["Iowan Old Style", "serif"],
		},
	},
	plugins: [require("@tailwindcss/typography")],
	darkMode: "class",
};
