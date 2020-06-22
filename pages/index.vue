<template>
  <div>
    <h1>Blog posts</h1>
    <v-btn color="success" @click="$fetch">Reload</v-btn>
    <!-- <template> -->
    <ul>
      <li v-for="post of posts" :key="post.id">
        <n-link :to="`/posts/${post.id}`">
          {{ post.title }}
        </n-link>
      </li>
      <li>
        <n-link to="/posts/404"> 404 post </n-link>
      </li>
    </ul>
    <!-- </template> -->
  </div>
</template>

<script>
import {
  defineComponent,
  useFetch,
  useContext,
  ref,
  onMounted
} from 'nuxt-composition-api'
import { useUserName } from '~/compositionFunctions/userName'
export default defineComponent({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { root }) {
    const posts = ref(null)
    const { $axios } = useContext()
    const userName = useUserName()
    useFetch(async () => {
      console.log('fetch')
      posts.value = (await $axios.$get('/posts')).slice(0, 20)
    })
    onMounted(() => {
      root.$inject('from index')
    })

    // const refresh = () => {
    //   fetch()
    // }

    return { posts, userName }
  }
})
</script>
