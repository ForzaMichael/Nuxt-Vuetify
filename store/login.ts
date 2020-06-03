import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({ name: 'loginStore', stateFactory: true, namespaced: true })
export default class Login extends VuexModule {
  token = 'default'
  id = -1
  @Mutation
  changeToken(token: string) {
    this.token = token
  }
}
