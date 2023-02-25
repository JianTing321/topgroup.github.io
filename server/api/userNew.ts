interface User {
  id: number;
  name: string;
  description: string;
}

const NAMES = ['David', 'Mark', 'Penguin', 'Allen']

// const NAMES = [
//   { id: 1, name: 'Sam', description: 'Hello' },
//   { id: 2, name: 'Mark', description: 'How' },
//   { id: 3, name: 'Penguin', description: 'Say' }
// ]

// return {
//   id: idx.toString(),
//   name: NAMES[idx],
//   description: `Hi, I am ${NAMES[idx]}`
// }

// const idx = ~~(Math.random() * NAMES.length)
// return {
//   id: idx.toString(),
//   name: NAMES[idx],
//   description: `Hi, I am ${NAMES[idx]}`
// }

export default defineEventHandler(():User => {
  return {
    id: 11,
    name: NAMES[1],
    description: 'string'
  }
}
)
