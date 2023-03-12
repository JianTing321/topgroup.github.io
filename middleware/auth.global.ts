// export default fromNodeMiddleware((to:any, from:any) => {
//   console.log(to, from)
// })
export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to, from)
  console.log('[middleware]' + '來自路由' + from.path, '當前路由(前往)' + to.path)
  //   return navi0gateTo('/')
  console.log(to.params.id)
})
