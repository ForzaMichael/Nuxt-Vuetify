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
