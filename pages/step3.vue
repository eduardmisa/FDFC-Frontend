<template>
  <v-card>
    <v-card-title>Step 3</v-card-title>
    <v-card-text>

      <v-text-field
        v-model="$store.state.form_state.tracking_number_1"
        label="tracking_number_1"
      >
      </v-text-field>
      <v-text-field
      v-model="$store.state.form_state.tracking_number_2"
        label="tracking_number_2"
      >
      </v-text-field>
      <v-text-field
      v-model="$store.state.form_state.tracking_number_3"
        label="tracking_number_3"
      >
      </v-text-field>

    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="Previous">Back</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="success" :loading="loading" @click="Save">Save</v-btn>
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
  methods: {
    Previous () {
      this.$router.push('/step2')
    },
    async Save () {
      const app = this

      app.loading = true
    
      let currentFormState = JSON.parse(JSON.stringify(app.$store.getters['form_state/getForm']))

      let response = await app.$api.UserService.SaveFormState(app.$auth.user.id, currentFormState)

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
  },
  mounted () {
    const app = this
    let currentFormState = app.$store.getters['form_state/getForm']
    if (currentFormState) {
      app.tracking_number_1 = currentFormState.tracking_number_1
      app.tracking_number_2 = currentFormState.tracking_number_2
      app.tracking_number_3 = currentFormState.tracking_number_3
    }
  }
}
</script>