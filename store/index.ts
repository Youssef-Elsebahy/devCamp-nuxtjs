interface User {
  email: string
  password: string
}

export const state = (): {users: User[], form: User; show: boolean} => ({
  users: [
    { email: 'yusuf@joe', password: '1234' },
    { email: 'ahmed@ah', password: '1234' },
  ],
  form: { email: '', password: '' },
  show: true,
})



// export const getters = {

// }

export const mutations = {
  setEmail(state: any, newValue: string) {
    state.form.email = newValue
  },
  setPassword(state: any, newValue: string) {
    state.form.password = newValue
  }
}

export const actions: any = {
 setEmail({ commit }: any, newValue: string) {
  commit('setEmail', newValue)
 },
 setPassword({ commit }: any, newValue: string) {
  commit('setPassword', newValue)
 }
}
