<template>
  <v-card>
    <v-card-title>Step 2</v-card-title>
    <v-card-text>

      <v-text-field
        v-model="$store.state.form_state.reference_number_1"
        label="reference_number_1"
        :rules="[v => !!v || 'reference_number_1 is required']"
      >
      </v-text-field>
      <v-text-field
      v-model="$store.state.form_state.reference_number_2"
        label="reference_number_2"
        :rules="[v => !!v || 'reference_number_2 is required']"
      >
      </v-text-field>
      <v-text-field
      v-model="$store.state.form_state.reference_number_3"
        label="reference_number_3"
        :rules="[v => !!v || 'reference_number_3 is required']"
      >
      </v-text-field>

    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="Previous">Back</v-btn>
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
      return this.$store.state.form_state.reference_number_1
          && this.$store.state.form_state.reference_number_2
          && this.$store.state.form_state.reference_number_3
    }
  },
  methods: {
    Previous () {
      this.$router.push('/step1')
    },
    Next () {
      this.$router.push('/step3')
    }
  }
}
</script>