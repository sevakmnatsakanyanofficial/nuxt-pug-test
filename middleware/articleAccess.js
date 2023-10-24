export default defineNuxtRouteMiddleware((to, from) => {
    return /^\d+$/.test(to.params.id);
})