<template>
<div class="container">
  <b-button @click="logout" class="my-3" variant="primary">Log out</b-button>
  <Tutorial />
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  layout: 'default',
  methods: {
    logout() {
      localStorage.removeItem("loggedIn")
      this.$router.push('/auth/login')
    }
  }
})
</script>


