<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          {{ userName }}, Welcome to the {{ users }}
        </v-card-title>
        <v-card-text>
          <p>
            Vuetify is a progressive Material Design component framework for
            Vue.js. It was designed to empower developers to create amazing
            applications.
          </p>
          <p>
            For more information on Vuetify, check out the
            <a href="https://vuetifyjs.com" target="_blank"> documentation </a>.
          </p>
          <p>
            If you have questions, please join the official
            <a href="https://chat.vuetifyjs.com/" target="_blank" title="chat">
              discord </a
            >.
          </p>
          <p>
            Find a bug? Report it on the github
            <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              title="contribute"
            >
              issue board </a
            >.
          </p>
          <p>
            Thank you for developing with Vuetify and I look forward to bringing
            more exciting features in the future.
          </p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3" />
          <a href="https://nuxtjs.org/" target="_blank">
            Nuxt Documentation
          </a>
          <br />
          <a href="https://github.com/nuxt/nuxt.js" target="_blank">
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire">
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { onMounted, defineComponent } from '@vue/composition-api'
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import { useUserName } from '~/compositionFunctions/user'
// import { $axios } from '~/utils/api'
export default defineComponent({
  components: {
    Logo,
    VuetifyLogo
  },
  // async asyncData(context) {
  //   const users = await context.$axios.$get<UserInfo[]>('/users')
  //   console.log(users)
  //   const userAgent = context.app.userAgent
  //   return { userAgent, users }
  // },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { root }) {
    const userName = useUserName()
    onMounted(() => {
      root.$inject('ha')
    })
    return { userName }
  }
})
</script>
