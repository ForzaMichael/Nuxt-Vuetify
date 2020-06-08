import { Context } from '@nuxt/types'
interface userContext extends Context {
  userAgent?: string
}
export default function(context: userContext) {
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
}
