import Vue from 'vue'
declare module 'vue/types/vue' {
  interface Vue {
    $inject(message: string): void
  }
}
