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
  useAsync,
  onUnmounted,
  watchEffect
} from 'nuxt-composition-api'

export default defineComponent({
  setup() {
    const shallow = shallowSsrRef({ v: 'init' })
    if (process.server) shallow.value = { v: 'changed' }

    // const posts = ref(null)

    const { $axios } = useContext()
    // console.log(posts.value)
    const posts = useAsync(async () => {
      console.log('async')
      return (await $axios.$get('/posts')).slice(0, 20)
    })
    console.log(posts.value)

    // useFetch(async () => {
    //   posts.value = await $axios
    //     .$get('https://jsonplaceholder.typicode.com/posts')
    //     .then(posts => posts.slice(0, 20))
    // })
    watchEffect(
      () => {
        console.log(posts.value)
      },
      {
        onTrigger(e) {
          debugger
          console.log(e)
        }
      }
    )
    onMounted(() => {
      shallow.value.v = 'mounted changed'
    })
    onUnmounted(() => {
      posts.value = null
      console.log(posts.value)
    })
    return { posts, shallow }
  }
})
</script>
