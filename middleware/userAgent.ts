import { Middleware } from '@nuxt/types'
const userAgent: Middleware = context => {
  // console.log(process.server)
  context.app.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
}

export default userAgent
