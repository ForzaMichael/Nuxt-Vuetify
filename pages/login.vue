<template>
  <v-card class="mx-auto" hover width="400" elevation="5" shaped>
    <v-card-title>
      {{ foo }}
    </v-card-title>
    <v-card-text>
      <v-form ref="formNode" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="success">
        Register
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn :disabled="!valid" color="primary" @click="formValidate">
        Validate
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import {
  computed,
  ref,
  reactive,
  defineComponent,
  useContext,
  useAsync,
  ssrRef
} from 'nuxt-composition-api'
import { loginStore } from '~/store'
// import { useUserName } from '~/compositionFunctions/user'
export default defineComponent({
  layout: 'login-layout',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { root }) {
    const { app, $axios } = useContext()
    const valid = ref(false)
    const name = ref('')
    const email = ref('')
    const formNode = ref(
      null || {
        validate: () => false
      }
    )
    const userAgent = ref('')
    const foo = ssrRef('server init')
    userAgent.value = app.userAgent
    // useAsync() runs on server-side only,return ref(null) on client-side
    const serverSideData = useAsync(
      async () => await $axios.$get<UserInfo[]>('/users')
    )
    const nameRules = reactive([
      (v: string) => !!v || 'Name is required',
      (v: string) =>
        (v && v.length <= 20) || 'Name must be less than 10 characters'
    ])
    const emailRules = reactive([
      (v: string) => !!v || 'E-mail is required',
      (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ])
    const token = computed(() => {
      return loginStore.token
    })

    const formValidate = async () => {
      if (formNode.value.validate()) {
        console.log(1)
        const users = await root.$axios.$get<UserInfo[]>('/users')
        users.every((item, index) => {
          if (item.username === name.value) {
            loginStore.SET_TOKEN(item.id + Math.random)
            loginStore.SET_USERS({
              id: item.id,
              username: name.value,
              email: email.value
            })
            root.$router.push('/')
            return false
          } else {
            if (index === users.length) {
              alert('message error!')
            }
            return true
          }
        })
        root.$inject('liqi')
      }
    }
    return {
      valid,
      name,
      nameRules,
      email,
      emailRules,
      token,
      formNode,
      formValidate,
      userAgent,
      serverSideData,
      foo
    }
  }
})
</script>
