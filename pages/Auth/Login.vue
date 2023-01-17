<template>
<div class="container my-5 w-50 h-50 bg-light p-4">
  <b-form @submit="loginUser">
    <h1 class="text-center">Login Form</h1>
      <b-form-group
        id="input-group-email"
        label="Email address:"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"
          v-model="emailInput"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-password" label="Password:" label-for="input-password">
        <b-form-input
          id="input-password"
          type="password"
          v-model="passwordInput"
          placeholder="Enter Password"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Login</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
      <b-button class="mt-3" variant="info" @click="toggleForm()">Sign Up</b-button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
interface User {
  email: string
  password: string
}

export default Vue.extend( {
 computed: {
    emailInput: {
      get() {
        return this.$store.state.form.email
      },
      set(newValue) {
        this.$store.commit('setEmail', newValue)
      }
    },
    passwordInput: {
      get() {
        return this.$store.state.form.password
      },
      set(newValue) {
        this.$store.commit('setPassword', newValue)
      }
    }
  },
  methods: {
    loginUser(event: any) {
      event.preventDefault()
      if (
        this.$store.state.users.some(
          (user: User) =>
            user.email === this.$store.state.form.email &&
            user.password === this.$store.state.form.password
        )
      ) {
        let loggedInUser = this.$store.state.users.filter((user: User) => user.email === this.$store.state.form.email)
        localStorage.setItem('loggedIn', JSON.stringify(loggedInUser))
        this.$router.push('/')
        this.$store.commit('emptyForm', {})
      } else {
        alert('wrong email or password')
      }
    },
     toggleForm() {
    this.$store.commit('emptyForm', {})
    this.$router.push('/auth/signUp')
  }
    // onReset(event: any) { // still working without the function???!!!!!
    //   event.preventDefault()
    //   // Reset our form values
    //   this.form.email = ''
    //   this.form.password = ''
    //   // Trick to reset/clear native browser form validation state
    //   this.show = false
    //   this.$nextTick(() => {
    //     this.show = true
    //   })
    // },
  },
  mounted() {
        if (localStorage.getItem('users')) {
            let users= JSON.parse(localStorage.getItem('users') || '{}')
           this.$store.commit('UpdateUsersList', users)
        }
  }
})
</script>
