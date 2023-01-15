<template>
  <div class="container my-5 w-50 h-50 bg-light p-4">
    <login-form v-if="show" />
    <sign-up-form v-else @toggleForm="show = true"/>
    <b-button variant="info" class="mt-3" v-if="show" @click="emptyForm(); show= false">Sign up</b-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import loginForm from '~/components/auth/loginForm.vue'
import signUpForm from '~/components/auth/signUpForm.vue'

export default Vue.extend({
  name: 'Auth',
  components: {loginForm, signUpForm},
  data() {
    return {
      show: true
    }
  },
  methods: {
    emptyForm() {
      this.$store.dispatch('emptyForm', {})
    }
  }
})
</script>
