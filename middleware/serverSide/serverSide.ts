// import { useContext } from 'nuxt-composition-api'
import { Context } from '@nuxt/types'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (_context: Context) => {
  if (process.server) {
    console.log('this is server')
  } else {
    console.log('this is client')
  }
}
