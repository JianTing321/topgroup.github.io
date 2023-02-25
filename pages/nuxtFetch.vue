<template>
  <div>
    <div>
      {{ pending ? 'Loading' : count?.name }}
    </div>
    <nuxt-link to="/">
      首頁
    </nuxt-link>
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

</script>
