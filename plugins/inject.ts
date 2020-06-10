import Vue from 'vue'
Vue.prototype.$inject = (param: string) =>
  console.log('This is an example', param)
