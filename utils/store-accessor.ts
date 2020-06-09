/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import LoginStore from '~/store/login'

let loginStore: LoginStore
// 不同客户端请求生成不同的store
function initialiseStores(store: Store<any>): void {
  loginStore = getModule(LoginStore, store)
}

export { initialiseStores, loginStore }
