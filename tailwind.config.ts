import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  // 會自動偵測 在打包出去後沒用到taiwindcss的頁面不會有taiwindcss
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    // 自訂義顏色 名稱也可自定義(需要重新build顏色才會套用)
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb'
        },
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#ff49db',
          dark: '#ff16d1'
        },
        myGray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc'
        }
      },
      screens: {
        'min-1001': '1001px'
      },
      // 您可以添加其他的樣式類別在這裡
      // 例如，以下是一個使用 @apply 轉換後的樣式類別
      sport: {
        '&': {
          '@screen min-1001': {
            '.sportOne': '@apply list-none flex justify-center',
            '.sportOneP': '@apply bg-gray-300 w-400 h-400 flex flex-col justify-center',
            '.sportOne > li > img': '@apply h-400 block'
            // ...
          }
        }
      }
    }
  },
  plugins: []
}
