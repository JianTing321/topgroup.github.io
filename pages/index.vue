<template>
  <div>
    <div>
      <nuxt-link to="/pinia">
        pinia
      </nuxt-link>
    </div>
    <div>
      <li v-for="m in messageList" :key="m.id">
        <nuxt-link
          :to="{
            name: 'pinia',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.name }}
        </nuxt-link>
      </li>
    </div>
    <div>
      <nuxt-link to="/taiwind">
        taiwind
      </nuxt-link>
    </div>
    <!-- <div>
      <nuxt-link to="/_tailwind/">
        taiwind模板
      </nuxt-link>
    </div> -->
    <div>
      <nuxt-link to="/product/">
        product
      </nuxt-link>
    </div>
    <div>
      <nuxt-link to="/nuxtFetch">
        nuxtFetchApi
      </nuxt-link>
    </div>
    <div>
      <nuxt-link to="/composables">
        composables
      </nuxt-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
const messageList = [
  { id: '001', title: '消息001', name: 'aaaa' },
  { id: '002', title: '消息002', name: 'aa' },
  { id: '003', title: '消息003', name: 'ccc' }
]

</script>
