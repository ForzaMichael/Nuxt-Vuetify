import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { SET_TOKEN, SET_USERS } from './mutationsTypes'
import { $axios } from '~/utils/api'
/**
 * Decorator选项的 name 要与本文件名相同
 * ( vuex-module-decorators 要求 name 与 vuex 模块的名称相同,以用此 name 拼接成完整的 vuex 模块化调用的路径,
 * 而 nuxt 将文件名作为 vuex 的模块名）
 */

@Module({ name: 'login', stateFactory: true, namespaced: true })
export default class LoginStore extends VuexModule {
  public token = 'default'
  public user: UserInfo = { name: '', email: '' };
  @Mutation
  [SET_TOKEN](token: string) {
    this.token = token
  }

  @Mutation
  [SET_USERS](user: UserInfo) {
    this.user = user
  }

  @Action
  async getUsers() {
    const user = await $axios.$get<UserInfo>('/user')
    this.SET_USERS(user)
  }
}
