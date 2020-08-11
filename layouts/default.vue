<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
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
      await this.$auth.logout()
      document.location.reload()
    }
  }
}
</script>
