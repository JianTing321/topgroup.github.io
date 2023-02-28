// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 將新創建的添加./ assets / css / main.css到文件中的
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  typescript: {
    typeCheck: true,
    strict: true
  },
  build: {
    transpile: ['@heroicons/vue']
  },
  // app: {
  //   baseURL: '/',
  //   buildAssetsDir: '/_nuxt/',
  //   cdnURL: './'
  // },
  // ssr: true,
  modules: [
    [
      // 設定掛載pinia並且將其中的工廠函數defineStore,defineStore自動載入自個別頁面(包含store的main),無須再引入
      '@pinia/nuxt', { autoImports: ['defineStore', 'storeToRefs'] }
    ],
    [
      '@nuxtjs/tailwindcss', {}
    ]
  ],
  imports: {
    dirs: ['./stores']
  },
  ssr: true,

  // routeRules: {
  //   '/questions/**': { swr: true },
  //   '/': { static: true },
  //   '/product/*': { static: true },
  //   '/product/**': { static: true },
  //   '/product/': { static: true },
  //   '/product': { static: true }
  // },
  // generate: { routes: ['/', '/nuxtFetch', '/product', '/pinia', '/tailwind'] },
  nitro: {
    // routeRules: {
    //   // Static page generated on-demand, revalidates in background (ISG)
    //   '/pinia/**': { swr: true },
    //   // Static page generated on-demand once (SSG - or at least mighty close)
    //   '/product/**': { static: true },
    //   // Render these routes on the client (SPA)
    //   '/nuxtFetch/**': { ssr: false }
    // },
    // prerender: {
    //   routes: ['/', '/nuxtFetch', '/product', '/pinia', '/tailwind'],
    //   crawlLinks: true
    // },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi']
    }
  }
})
