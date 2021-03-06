import { Plugin } from '@nuxt/types'
import { initializeAxios } from '~/utils/api'

const axiosAccessor: Plugin = ({ $axios }) => {
  initializeAxios($axios)
}

export default axiosAccessor
