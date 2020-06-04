<template>
  <v-card class="mx-auto" hover width="400" elevation="5" shaped>
    <v-card-title>
      {{ id }}
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
  defineComponent,
  computed,
  ref,
  reactive
  // watchEffect
  // onMounted
} from '@vue/composition-api'
import { testUser } from '~/types/index'
// import { VNode } from 'vue'
import { loginStore } from '~/store'
// function testUser(params) {
//   return params[0]
// }
// testUser(1)
export default defineComponent({
  layout: 'login-layout',
  setup() {
    const valid = ref(false)
    const name = ref('')
    const email = ref('')
    const formNode = ref(null)
    const nameRules = reactive([
      (v: string) => !!v || 'Name is required',
      (v: string) =>
        (v && v.length <= 10) || 'Name must be less than 10 characters'
    ])
    const emailRules = reactive([
      (v: string) => !!v || 'E-mail is required',
      (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ])
    const id = computed(() => {
      return loginStore.id
    })

    const formValidate = () => {
      if (formNode.value.validate()) {
        loginStore.changeId(name.value)
        // root.$router.push('/')
      }
    }

    // watchEffect(() => {
    //   console.log(id)
    // })
    return {
      valid,
      name,
      nameRules,
      email,
      emailRules,
      id,
      formNode,
      formValidate
    }
  }
  // data: () => ({
  //   valid: true,
  //   name: '',
  //   nameRules: [
  //     v => !!v || 'Name is required',
  //     v => (v && v.length <= 10) || 'Name must be less than 10 characters'
  //   ],
  //   email: '',
  //   emailRules: [
  //     v => !!v || 'E-mail is required',
  //     v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
  //   ]
  // }),
  // computed: {
  //   id() {
  //     return this.$store.state.login.id
  //   }
  // },
  //   methods: {
  //     validate() {
  //       if (formNode.validate()) {
  //         this.store.commit('changeId', this.name)
  //         // this.$router.push('/')
  //       }
  //     },
  //     reset() {
  //       formNode.reset()
  //     },
  //     resetValidation() {
  //       formNode.resetValidation()
  //     }
  //   }
})
</script>
