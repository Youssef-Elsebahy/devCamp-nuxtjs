interface User {
  username: string
  email: string
  password: string
}

export const state = (): {users: User[], form: User} => ({
  users: [
    { email: 'yusuf@joe', password: '1234', username: 'yusuf' },
    { email: 'ahmed@ah', password: '1234', username: 'ahmed' },
  ],
  form: { email: '', password: '', username: '' },
})

export const mutations = {
  setUsername(state: any, newUsername: string) {
    state.form.username = newUsername
  },
  setEmail(state: any, newEmail: string) {
    state.form.email = newEmail
  },
  setPassword(state: any, newPassword: string) {
    state.form.password = newPassword
  },
  UpdateUsersList(state: any, users: User) {
    state.users = users
  },
  emptyForm(state: any, {}: object) {
    state.form = {}
  },
  addNewUser(state: any, signedUpUser: User) {
    state.users.push(signedUpUser)
  }
}
