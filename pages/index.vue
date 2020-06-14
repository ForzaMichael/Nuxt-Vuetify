<template>
  <div>
    <h1>Blog posts</h1>
    <template>
      <ul>
        <li v-for="post of posts" :key="post.id">
          <n-link :to="`/posts/${post.id}`">
            {{ post.title }}
          </n-link>
        </li>
        <li>
          <n-link to="/posts/404">
            404 post
          </n-link>
        </li>
      </ul>
    </template>
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
      posts.value = await $axios
        .$get('https://jsonplaceholder.typicode.com/posts')
        .then(posts => posts.slice(0, 20))
    })
    onMounted(() => {
      root.$inject('from index')
    })

    return { posts, userName }
  }
})
</script>
