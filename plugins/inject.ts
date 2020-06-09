// import Vue from 'vue'
declare module 'vue/types/vue' {
  interface Vue {
    $myInjectedFunction(message: string): void
  }
}
Vue.prototype.$myInjectedFunction = (msg: number) => console.log(msg)
