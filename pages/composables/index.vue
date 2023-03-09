<template>
  <div>
    composable裡面的值 {{ user }}
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup () {
    const user = useUser()
    document.addEventListener('click', function () {
      return user + 'cc'
    })
    return { user }
  }
})
</script>
