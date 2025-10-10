export default defineNuxtConfig({
  compatibilityDate: "2025-10-10",
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
