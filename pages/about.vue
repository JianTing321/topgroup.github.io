<template>
  <div>
    <div
      style="
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-image: url(/about/About_us_bg.jpg);
    background-size:cover;
    background-size: 100%;
    height: 40vw;
    z-index: 0;    "
    >
      <h1
        style="
        font-size: 4vw;
        color:white;
        text-shadow: 1px 1px 0.5px rgb(0, 0, 0);
        text-align: center;"
      >
        We are building masters<br> Helping you navigate real estate<br> for over 50 years.around you.
      </h1>
    </div>
    <div>
      <h1
        style="
        font-size: 4vmin;
        text-align: center;
        padding-top: 8vh;
        padding-bottom: 5vh;"
      >
        Architectural Services
      </h1>
    </div>
    <p
      style="
        margin: 0 auto;
        text-align: center;
        margin-bottom: 4vh;"
    >
      We want to make real estate simple for our clients so they can have confidence during one of the largest
      transactions they will ever make. Our years of experience, innovative technology, and our collaborative
      network of industry professionals that love what they do allows us to take the complexity out of the entire
      process.
    </p>
    <div class="au" style="background-color:burlywood;padding:2rem;">
      <ul style="display: flex;justify-content: center;">
        <li v-for="(item, index) in count" :key="index">
          <div :style="{backgroundImage:`url(${item.src})`}" style="width: 300px;height: 300px;display: flex;justify-content: center;align-items: center;">
            <p class="auiop" style="position:absolute;font-weight: bolder;color: white;text-shadow: 1px 1px black;font-size: medium;">
              {{ item.title }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
// export interface aboutLinkConfig {
//   name?:string,
//   src?: string,
//   title?: string,
// }
// const aboutLink = reactive<aboutLinkConfig[]>([])

// function getLink () {
//   const newLinks:aboutLinkConfig[] = [
//     {
//       name: 'Origin',
//       src: '/about/abt1.jpg',
//       title: 'TOP GROUP Realtors Stories'
//     },
//     {
//       name: 'Material',
//       src: '/about/abt2.jpg',
//       title: 'TOP GROUP with Job'
//     }
//   ]
//   aboutLink.push(...newLinks)
// }
useHead({
  title: '關於',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
})

const { data: count } = useLazyAsyncData('count', () => $fetch('/api/about'))
// 通过监听 count 等到它获取到数据时再执行相应的操作
watch(count, (newValue, oldValue) => {
  console.log(newValue, oldValue)
  console.log(count.value)
})

</script>
