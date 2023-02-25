// 匿名暴露會將檔名當作function所以調用時就要改成 const user = useUser()
export default function () {
  return useState('user', () => 'ccc')
}
// export const useUser = () => {
//   return useState('user', () => 'ccc')
// }
