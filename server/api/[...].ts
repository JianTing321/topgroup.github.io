export default defineEventHandler((event) => {
  console.log('沒有匹配到正確的api', event)
  return 'ok'
}
)
