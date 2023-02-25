
export const useTestStore = defineStore('test', () => {
  // 我们不会直接暴露这个元素
  const set = ref('測試的倉庫aaa')
  const testSet = ref<number>(2222)

  const doubleClickTest = computed(() => testSet.value * 2)

  // function doubleClickTest (testSet:number) {
  //   return testSet++
  // }

  return {
    set,
    testSet,
    doubleClickTest
  }
})
