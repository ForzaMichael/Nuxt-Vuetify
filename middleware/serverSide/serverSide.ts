// import { useContext } from 'nuxt-composition-api'
export default context => {
  console.log('this is server')
  if (!process.server) {
    console.log('this is client')
  }
  // const contexts = useContext()
  // next()
}
