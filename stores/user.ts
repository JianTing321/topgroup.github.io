// 使用者未登入(訪客)
export interface userConfig {
  idNumber:string | number
  userName: string | number
  age?: number
  sex?: 'male'|'female'
  email?: number | string
  address?: number | string
  cellphone?: number,
  member:{
    status:boolean
    grade:string
  }
}

export const useUserStore = defineStore('userStore', () => {
  const userState = reactive<userConfig>({
    userName: '訪客',
    idNumber: Math.random() * 10,
    member: {
      status: true,
      grade: '一般會員' + 123
    }
  })
  // userState.userName = 'aaa'
  // const changeName = (newValue:string) => {
  //   userState.userName = newValue
  // }
  function changeNameA () {
    userState.userName = 'aaa'
  }

  return {
    changeNameA,
    // changeName,
    ...userState
  }
})
