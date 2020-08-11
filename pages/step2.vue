<template>
  <v-card>
    <v-card-title>Step 2</v-card-title>
    <v-card-text>

      <v-text-field
        v-model="$store.state.form_state.reference_number_1"
        label="reference_number_1"
      >
      </v-text-field>
      <v-text-field
      v-model="$store.state.form_state.reference_number_2"
        label="reference_number_2"
      >
      </v-text-field>
      <v-text-field
      v-model="$store.state.form_state.reference_number_3"
        label="reference_number_3"
      >
      </v-text-field>

    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="Previous">Back</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="Next">Next</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapState} from 'vuex'

export default {
  methods: {
    Previous () {
      this.$router.push('/step1')
    },
    Next () {
      this.$router.push('/step3')
    }
  },
  mounted () {
    const app = this
    let currentFormState = app.$store.getters['form_state/getForm']
    if (currentFormState) {
      app.reference_number_1 = currentFormState.reference_number_1
      app.reference_number_2 = currentFormState.reference_number_2
      app.reference_number_3 = currentFormState.reference_number_3
    }
  }
}
</script>