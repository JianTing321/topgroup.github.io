<template>
  <div>
    <ClientOnly>
      <div class="bg-white">
        <!-- <p class="pb-4 text-2xl text-slate-600">
      這裡是最外層 app.vue
    </p> -->
        <NuxtLayout name="default">
          <template #header>
            <Header-Global class="z-50" />
            <!-- <p class="px-6 pt-4 text-xl text-green-500">
              這段會放置在 header 插槽
            </p> -->
          </template>
          <template #default>
            <div>{{ userStore.userName }}</div>
            <p v-if=" route.path !== '/'" class="px-6 pt-4 text-xl text-blue-500">
              {{ route.path }}
            </p>
            <NuxtLoadingIndicator />
            <NuxtPage keep-alive />
            <p class="px-6 pt-4 text-xl text-cyan-500">
              被 NuxtLayout 包裹的元件將會放置到 Layout 的預設 slot 中
            </p>
          </template>
          <template #footer>
            <p class="px-6 pt-4 text-xl text-blue-500">
              這段會放置在 footer 插槽
            </p>
            <Footer-Global />
          </template>
        </NuxtLayout>
      </div>
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const userStore = useUserStore()

useHead({
  // chunk代表當頁的標題
  titleTemplate: (chunk) => {
    return chunk ? `${chunk} - topGroup` : 'topGroup'
  }
})

</script>
<style>
</style>
