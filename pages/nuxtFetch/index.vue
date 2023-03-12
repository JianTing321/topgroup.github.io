<template>
  <div>
    <div>
      {{ pending ? 'Loading' : count?.name }}
      {{ pending ? 'Loading' : count?.id }}
      {{ pending ? 'Loading' : count?.description }}
    </div>
    <nuxt-link to="/">
      首頁
    </nuxt-link>
    <h2>現在時間{{ NowDate?.Now }}</h2>
    <h2>
      紀錄讀取次數Page visits: {{ countSet?.times }}
    </h2>
  </div>
</template>

<script lang="ts" setup>
// import { useMainStore } from '../stores/main'
// import { storeToRefs } from 'pinia'
// definePageMeta({
//   middleware: 'nuxtFetch'
// })

const { pending, data: count } = useLazyAsyncData('count', () => $fetch('/api/user'))
// 通过监听 count 等到它获取到数据时再执行相应的操作
watch(count, (newValue, oldValue) => {
  console.log(newValue, oldValue)
  console.log(count.value)
  // Because count starts out null, you won't have access
  // to its contents immediately, but you can watch it.
})
const { data: NowDate } = await useFetch('/api/getTime')
const { data: countSet } = await useAsyncData('countSet', () => $fetch('/api/counter/countSet'))

</script>
