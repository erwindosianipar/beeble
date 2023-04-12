export default defineNuxtRouteMiddleware((to) => {
	console.info("[middleware]", to.path);
});
