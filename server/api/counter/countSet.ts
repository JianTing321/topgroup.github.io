interface counter{
  times:number
}

const counter = {
  times: 0
}
export default defineEventHandler(() => {
  counter.times++
  return counter
})
