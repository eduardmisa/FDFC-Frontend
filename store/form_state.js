export const state = () => ({
    current_step: '',
    firstname: '',
    middlename: '',
    lastname: '',
    reference_number_1: '',
    reference_number_2: '',
    reference_number_3: '',
    tracking_number_1: '',
    tracking_number_2: '',
    tracking_number_3: '',
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
    async SAVE_UserFormState(state, step) {

      const app = this

      let currentFormState = state.getters.getForm

      currentFormState.current_step = step

      return await app.$api.UserService.SaveFormState(app.$auth.user.id, currentFormState)
    },
  }
  