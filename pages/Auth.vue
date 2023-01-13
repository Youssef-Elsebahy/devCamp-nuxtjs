<template>
  <div class="main container my-5">
    <login-form />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import loginForm from '~/components/auth/loginForm.vue'

export default Vue.extend({
  name: 'Login',
  components: {loginForm}

})
</script>
