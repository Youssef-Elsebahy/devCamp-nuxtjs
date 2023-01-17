<template>
<div class="container my-5 w-50 h-50 bg-light p-4">
  <b-form @submit="signUpUser">
    <h1 class="text-center">SignUp Form</h1>
    <b-form-group
      id="input-group-username"
      label="Username:"
      label-for="input-username"
    >
      <b-form-input
        id="input-username"
        v-model="usernameInput"
        type="text"
        placeholder="Enter username"
        required
      ></b-form-input>
    </b-form-group>

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

    <b-form-group
      id="input-group-password"
      label="Password:"
      label-for="input-password"
    >
      <b-form-input
        id="input-password"
        type="password"
        v-model="passwordInput"
        placeholder="Enter Password"
        required
      ></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary">sign up</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </b-form>
  <b-button class="mt-3" variant="info" @click="toggleForm()">LogIn</b-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
interface User {
  username: string
  email: string
  password: string
}

export default Vue.extend({
  computed: {
    usernameInput: {
      get() {
        return this.$store.state.form.username
      },
      set(newUsername) {
        this.$store.commit('setUsername', newUsername)
      },
    },
    emailInput: {
      get() {
        return this.$store.state.form.email
      },
      set(newEmail) {
        this.$store.commit('setEmail', newEmail)
      },
    },
    passwordInput: {
      get() {
        return this.$store.state.form.password
      },
      set(newPassword) {
        this.$store.commit('setPassword', newPassword)
      },
    },
  },
  methods: {
    signUpUser(event: any) {
      event.preventDefault()
      if (
        this.$store.state.users.some(
          (user: User) => user.username === this.$store.state.form.username
        )
      ) {
        alert('this username is used already')
      } else if (
        this.$store.state.users.some(
          (user: User) => user.email === this.$store.state.form.email
        )
      ) {
        alert('this email is used already')
      } else {
        const signedUpUser = this.$store.state.form
        this.$store.commit('addNewUser', signedUpUser)
        localStorage.setItem('users', JSON.stringify(this.$store.state.users))
        localStorage.setItem('loggedIn', JSON.stringify(this.$store.state.form))
        this.$router.push('/')
        this.$store.commit('emptyForm', {})
        alert('signed up successfully')
      }
    },
  toggleForm() {
    this.$store.commit('emptyForm', {})
    this.$router.push('/auth/login')
  }
  },
  mounted() {
        if (localStorage.getItem('users')) {
            let users= JSON.parse(localStorage.getItem('users') || '{}')
           this.$store.commit('UpdateUsersList', users)
        }
  }
})
</script>
