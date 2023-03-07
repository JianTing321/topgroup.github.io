/*
先行安裝:
 npm install pm2 -g
*/
// 以下是pm2專用的文件"ecosystem.config.js"
module.exports = {
  apps: [
    {
      name: 'topgroup',
      port: '3000',
      exec_mode: 'fork',
      // exec_mode: 'cluster', /* 這裡的選項雖打開可以增加效能，但是需要較多的配置暫且不使用 */
      instances: '1', /* 設定開啟網頁的數量 */
      script: './.output/server/index.mjs', /* 左側路徑可能會不一樣，如果將整個.output資料夾取出，除了要把此檔案複製放在其根目錄(.output)外，左側的路徑名也要設為'script:./server/index.mjs' */
      // script: './server/index.mjs'
      env: {
        NITRO_PORT: 3001,
        NITRO_HOST: '127.0.0.1'
      }
    }
  ]
}

/*
Pm2相關指令
pm2 start
pm2 stop 0
pm2 delete 0
pm2 delete all

服務器
http://localhost:3001/
http://127.0.0.1:3001/
*/
