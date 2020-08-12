<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
    >
      <v-toolbar-title v-text="UserInfo" />
      <v-spacer />
      <v-btn outlined color="error" @click="Logout">
        Logout
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-snackbar
      v-model="$store.state.toast.show"
      top
      :color="$store.state.toast.color"
      multi-line
      :timeout="2000"
    >
      {{ $store.state.toast.message }}
    </v-snackbar>
  </v-app>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    UserInfo () {
      return `${this.$auth.user.firstname} ${this.$auth.user.lastname}`
    }
  },
  methods: {
    async Logout () {

      const app = this

      let response = await app.$store.dispatch('form_state/SAVE_UserFormState', app.$router.currentRoute.name)

      await this.$auth.logout()
      document.location.reload()
    }
  },
  async mounted () {
    const app = this
    let result = await app.$store.dispatch('form_state/FETCH_UserFormState')
    let formState = app.$store.getters['form_state/getForm']
    if (formState) {
      try {
        app.$router.push(formState.current_step)
      } catch (error) {
        
      }
    }
  }
}
</script>
