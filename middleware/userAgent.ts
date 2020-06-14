import { Middleware } from '@nuxt/types'
const userAgent: Middleware = context => {
  context.app.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
}

export default userAgent
