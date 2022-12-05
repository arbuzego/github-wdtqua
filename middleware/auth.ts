export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if an user is authenticated
  if (false) {
    return navigateTo('/about');
  } else {
    return navigateTo('/404');
  }
});
