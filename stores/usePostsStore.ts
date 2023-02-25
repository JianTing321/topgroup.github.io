export const usePostsStore = defineStore('posts', () => {
  const posts = ref([])

  function getPosts () {
    fetch('https://api.nuxtjs.dev/mountains')
    // fetch('http://localhost:3000/api/userNew')
      .then(response => response.json())
      .then((data) => {
        // posts.value = data
        // alert(posts.value)
        console.log(data)
        console.log('Data is fetched.')
        const dataName = ([])
        for (const i of data) {
          dataName.push(i.title)
        }
        data = dataName
        posts.value = data
      })
      .catch((error) => {
        console.log(error)
        // alert('沒抓到')
      })
  }

  // Runs the very first time the store is used. i.e., when the store is initialized.
  onMounted(getPosts)

  return {
    posts,
    getPosts
  }
})
