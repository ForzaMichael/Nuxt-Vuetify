<template>
  <v-layout>
    <v-flex class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      {{ posts }}
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>
<script>
import {
  defineComponent,
  useContext,
  shallowSsrRef,
  onMounted,
  useAsync
} from 'nuxt-composition-api'

export default defineComponent({
  setup() {
    const shallow = shallowSsrRef({ v: 'init' })
    if (process.server) shallow.value = { v: 'changed' }
    onMounted(() => {
      shallow.value.v = 'mounted changed'
    })
    // const posts = ref(null)
    const { $axios } = useContext()
    const posts = useAsync(async () => {
      console.log('async')
      return await $axios.$get('/posts')
    })
    // useFetch(async () => {
    //   posts.value = await $axios
    //     .$get('https://jsonplaceholder.typicode.com/posts')
    //     .then(posts => posts.slice(0, 20))
    // })

    return { posts, shallow }
  }
})
</script>
