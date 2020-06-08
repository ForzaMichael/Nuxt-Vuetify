import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'

/**
 * name 要与本文件名相同
 * ( vuex-module-decorators 要求 name 与 vuex 模块的名称相同,以用此 name 拼接成完整的模块化 vuex 调用,
 * 而 nuxt 将文件名作为 vuex 的模块名）
 */

@Module({ name: 'login', stateFactory: true, namespaced: true })
export default class LoginStore extends VuexModule {
  public token = 'default'
  public id = '-1'
  public users: UserInfo[] = []
  @Mutation
  changeId(id: string) {
    this.id = id
  }

  @Mutation
  setUsers(users: UserInfo[]) {
    this.users = users
  }

  @Mutation
  testUser(users: UserInfo[]): UserInfo {
    return users[0]
  }

  @Action
  async getUsers() {
    const users = await $axios.$get<UserInfo[]>('/users')
    this.setUsers(users)
  }
}
