// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      // title: 'topGroup',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' }
      ]
    }
  },
  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBase: '/api'
    }
  },
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
  modules: [
  // modules裡面代表的是全域的模塊，將會載入有配置的套件，因此這裡的順序也是非常重要。
    [
      // 設定掛載pinia並且將其中的工廠函數defineStore,defineStore自動載入自個別頁面(包含store的main),無須再引入
      '@pinia/nuxt', { autoImports: ['defineStore', 'storeToRefs'] }
    ],
    [
      '@nuxtjs/tailwindcss', {}
    ]
  ],
  imports: {
    //  設定自動掛載pinia(也就是不用在個別頁面import)
    dirs: ['./stores']
  },
  // ssr: true,
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
    //   '/**': { ssr: true },
    //   '/sport/**': { ssr: true },
    //   '/pinia/**': { ssr: true },
    //   '/sign/**': { ssr: true },
    //   '/composables/**': { ssr: true },
    //   '/about/**': { ssr: true },
    //   '/product/**': { ssr: true },
    //   '/nuxtFetch/**': { cors: true },
    //   '/api/**': { cors: true, proxy: 'http://localhost:3001/**' }
    // },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      //   routes: ['/', '/nuxtFetch', '/product', '/pinia', '/tailwind'],
      ignore: ['/hi']
    }
  }
})
