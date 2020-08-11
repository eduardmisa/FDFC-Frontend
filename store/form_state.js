export const state = () => ({
    firstname: null,
    middlename: null,
    lastname: null,
    reference_number_1: null,
    reference_number_2: null,
    reference_number_3: null,
    tracking_number_1: null,
    tracking_number_2: null,
    tracking_number_3: null,
  })
  
  export const getters = {
    getForm: state => {
      return state
    },
  }
  
  export const mutations = {
    setForm(state, form) {
      state = Object.assign(state, form)
    },
  }
  
  export const actions = {
    async FETCH_UserFormState(state) {
      let response = await this.$api.FormStateService.GetByUser(this.$auth.user.code)
      if (response.success) {
        state.commit('setForm', response.data)
      }
    },
    async SAVE_UserFormState(state) {

      const app = this

      let currentFormState = JSON.parse(JSON.stringify(state.getters.getForm))

      return await app.$api.UserService.SaveFormState(app.$auth.user.id, currentFormState)
    },
  }
  