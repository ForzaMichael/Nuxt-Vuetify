import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({ name: 'login', stateFactory: true, namespaced: true }) // name 与 class 名要相同(除了小写)
export default class Login extends VuexModule {
  token = 'default'
  id = '-1'
  @Mutation
  changeId(id: string) {
    this.id = id
  }
}
