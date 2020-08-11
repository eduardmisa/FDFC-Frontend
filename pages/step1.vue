<template>
  <v-card>
    <v-card-title>Step 1</v-card-title>
    <v-card-text>

      <v-text-field
        v-model="$store.state.form_state.firstname"
        label="firstname"
      >
      </v-text-field>
      <v-text-field
      v-model="$store.state.form_state.middlename"
        label="middlename"
      >
      </v-text-field>
      <v-text-field
      v-model="$store.state.form_state.lastname"
        label="lastname"
      >
      </v-text-field>

    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="Next">Next</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapState} from 'vuex'

export default {
  methods: {
    Next () {
      this.$router.push('/step2')
    }
  },
  mounted () {
    const app = this
    let currentFormState = app.$store.getters['form_state/getForm']
    if (currentFormState) {
      app.firstname = currentFormState.firstname
      app.middlename = currentFormState.middlename
      app.lastname = currentFormState.lastname
    }
  }
}
</script>