<template>
  <v-card class="mx-auto" hover width="400" elevation="5" shaped>
    <v-card-title>
      {{ userAgent }}
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
import { computed, ref, reactive } from '@vue/composition-api'
import { loginStore } from '~/store'
import { useUserName } from '~/compositionFunctions/user'
export default {
  layout: 'login-layout',
  asyncData(context) {
    const userAgent = context.app.userAgent
    return { userAgent }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { root }) {
    const valid = ref(false)
    const name = ref('')
    const email = ref('')
    const formNode = ref(null)
    const userName = useUserName()
    const nameRules = reactive([
      (v: string) => !!v || 'Name is required',
      (v: string) =>
        (v && v.length <= 10) || 'Name must be less than 10 characters'
    ])
    const emailRules = reactive([
      (v: string) => !!v || 'E-mail is required',
      (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ])
    const token = computed(() => {
      return loginStore.token
    })

    const formValidate = () => {
      if (formNode.value.validate()) {
        // const users = await root.$axios.$get('/users')
        // console.log(users)
        loginStore.SET_TOKEN(name.value + (Math.random() * 100).toFixed(2))
        loginStore.SET_USERS({ name: name.value, email: email.value })
        root.$router.push('/')
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
      userName
    }
  }
}
</script>
