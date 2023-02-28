export interface aboutLinkConfig {
  name?:string,
  src?: string,
  title?: string,
}
const aboutLink:aboutLinkConfig[] = [
  {
    name: 'Origin',
    src: '/about/abt1.jpg',
    title: 'TOP GROUP Realtors Stories'
  },
  {
    name: 'Material',
    src: '/about/abt2.jpg',
    title: 'TOP GROUP with Job'
  }
]

// export default defineEventHandler(() => aboutLink)

export default defineEventHandler(() => aboutLink)
