<template>
  <v-card>
    <v-card-title>Step 1</v-card-title>
    <v-card-text>

      <v-text-field
        v-model="$store.state.form_state.firstname"
        label="firstname"
        :rules="[v => !!v || 'firstname is required']"
      >
      </v-text-field>
      <v-text-field
      v-model="$store.state.form_state.middlename"
        label="middlename"
        :rules="[v => !!v || 'middlename is required']"
      >
      </v-text-field>
      <v-text-field
      v-model="$store.state.form_state.lastname"
        label="lastname"
        :rules="[v => !!v || 'lastname is required']"
      >
      </v-text-field>

    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="$router.push('/')">Back to Inside</v-btn>
      <v-spacer></v-spacer>
      <v-btn :disabled="!CanProceed" color="primary" @click="Next">Next</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    CanProceed () {
      return this.$store.state.form_state.firstname
          && this.$store.state.form_state.middlename
          && this.$store.state.form_state.lastname
    }
  },
  methods: {
    Next () {
      this.$router.push('/step2')
    }
  }
}
</script>