// export default fromNodeMiddleware((to:any, from:any) => {
//   console.log(to, from)
// })
export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to, from)
//   return navigateTo('/')
})
