<template>
  <v-layout>
    <v-flex class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
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
  useFetch,
  useContext,
  ref
} from 'nuxt-composition-api'

export default defineComponent({
  setup() {
    const posts = ref(null)
    const { $axios } = useContext()

    useFetch(async () => {
      posts.value = await $axios
        .$get('https://jsonplaceholder.typicode.com/posts')
        .then(posts => posts.slice(0, 20))
    })

    return { posts }
  }
})
</script>
