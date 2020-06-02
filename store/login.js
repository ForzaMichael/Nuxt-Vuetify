// import { State } from './login'
export const state = () => ({
  token: '',
  id: -1
})

export const mutations = {
  changeId(state, id) {
    state().id = id
  }
}
