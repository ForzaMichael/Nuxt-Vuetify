/* eslint-disable import/no-mutable-exports */
import { NuxtAxiosInstance } from '@nuxtjs/axios'
const baseUrl = 'https://jsonplaceholder.typicode.com'
let $axios: NuxtAxiosInstance

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
  // $axios.timeout
  $axios.onRequest(config => {
    console.log(config.url)
    config.url = baseUrl + config.url
    return config
  })
  $axios.onError(error => {
    console.log(error)
  })
}

export { $axios }
