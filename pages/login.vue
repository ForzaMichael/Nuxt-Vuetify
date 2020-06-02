<template>
  <v-card class="mx-auto" hover width="400" elevation="5" shaped>
    <v-card-title>
      {{ id }}
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
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
      <v-btn :disabled="!valid" color="primary" @click="validate">
        Validate
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import {
  defineComponent,
  computed,
  ref,
  reactive,
  onMounted
} from '@vue/composition-api'
export default defineComponent({
  layout: 'login-layout',
  setup(props, { root }) {
    onMounted(() => {
      console.log(props, root)
    })
    const valid = ref(true)
    const name = ref('')
    const email = ref('')
    const nameRules = reactive([
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ])
    const emailRules = reactive([
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ])
    const id = computed(() => 10)
    const validate = () => {
      if (this.$refs.form.validate()) {
        this.store.commit('changeId', name.value)
        // this.$router.push('/')
      }
    }
    return {
      valid,
      name,
      nameRules,
      email,
      emailRules,
      id,
      validate
    }
  },
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
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.store.commit('changeId', this.name)
        // this.$router.push('/')
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    }
  }
})
</script>
