// interface time {
//   time: number|string;
// }

const NowDate =
  { Now: new Date() }

export default defineEventHandler(() =>
  NowDate
)

// export interface aboutLinkConfig {
//   name?:string,
//   src?: string,
//   title?: string,
// }
// const aboutLink:aboutLinkConfig[] = [
//   {
//     name: 'Origin',
//     src: '/about/abt1.jpg',
//     title: 'TOP GROUP Realtors Stories'
//   },
//   {
//     name: 'Material',
//     src: '/about/abt2.jpg',
//     title: 'TOP GROUP with Job'
//   }
// ]

// export default defineEventHandler(() =>
// // 一般來說通常api會，直接連接數據庫，目前這裡為暫時寫死的資料
//   aboutLink)
