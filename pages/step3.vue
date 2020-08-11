<template>
  <v-card>
    <v-card-title>Step 3</v-card-title>
    <v-card-text>

      <v-text-field
        v-model="$store.state.form_state.tracking_number_1"
        label="tracking_number_1"
        :rules="[v => !!v || 'tracking_number_1 is required']"
      >
      </v-text-field>
      <v-text-field
      v-model="$store.state.form_state.tracking_number_2"
        label="tracking_number_2"
        :rules="[v => !!v || 'tracking_number_2 is required']"
      >
      </v-text-field>
      <v-text-field
      v-model="$store.state.form_state.tracking_number_3"
        label="tracking_number_3"
        :rules="[v => !!v || 'tracking_number_3 is required']"
      >
      </v-text-field>

    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="Previous">Back</v-btn>
      <v-spacer></v-spacer>
      <v-btn :disabled="!CanProceed" color="success" :loading="loading" @click="Save">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data () {
    return {
      loading: false
    }
  },
  computed: {
    CanProceed () {
      return this.$store.state.form_state.tracking_number_1
          && this.$store.state.form_state.tracking_number_2
          && this.$store.state.form_state.tracking_number_3
    }
  },
  methods: {
    Previous () {
      this.$router.push('/step2')
    },
    async Save () {
      const app = this

      app.loading = true
    
      let currentFormState = JSON.parse(JSON.stringify(app.$store.getters['form_state/getForm']))

      let response = await app.$store.dispatch('form_state/SAVE_UserFormState')

      if (response.success) {
        app.$toast({show: true, message: 'Form state Saved!', color: 'success'})
        setTimeout(() => {
          window.location.replace('/');
        }, 2000)
      }
      else {
        try {
          app.$toast({show: true, message: response.data.error, color: 'error'})
        } catch (error) {
          app.$toast({show: true, message: 'Something went wrong', color: 'error'})
        }
        app.loading = false
      }
    }
  }
}
</script>