<template>
  <div class="main container my-5">
    <b-form @submit="loginUser" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-email"
        label="Email address:"
        label-for="input-email"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-email"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-password" label="Password:" label-for="input-password">
        <b-form-input
          id="input-password"
          aria-describedby="password-help-block"
          type="password"
          v-model="form.password"
          placeholder="Enter Password"
          required
        ></b-form-input>
        <b-form-text id="password-help-block">
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </b-form-text>
      </b-form-group>
      <b-button type="submit" variant="primary">Login</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NuxtLogo from '~/components/NuxtLogo.vue'

interface User {
  email: string
  password: string
}

export default Vue.extend({
  components: { NuxtLogo },
  name: 'Login',
  data(): { users: User[]; form: User; show: boolean } {
    return {
      users: [
        { email: 'yusuf@joe', password: '1234' },
        { email: 'ahmed@ah', password: '1234' },
      ],
      form: { email: '', password: '' },
      show: true,
    }
  },
  methods: {
    loginUser(event: any) {
      event.preventDefault()
      if (
        this.users.some(
          (user) =>
            user.email === this.form.email &&
            user.password === this.form.password
        )
      ) {
        localStorage.setItem('loggedIn', JSON.stringify(this.form))
        this.$router.push('/')
      } else {
        alert('wrong email or password')
      }
    },
    onReset(event: any) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.password = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
})
</script>
