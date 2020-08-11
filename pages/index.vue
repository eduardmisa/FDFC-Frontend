<template>
  <v-card>
    <v-card-title></v-card-title>
    <v-card-text>

      <h1>Inside</h1>
      <br>
      <h3>Welcome</h3>

      <br>
      <br>

      <h3>Step 1</h3>
      <v-text-field
        v-model="$store.state.form_state.firstname"
        label="firstname"
        readonly
      >
      </v-text-field>
      <v-text-field
      v-model="$store.state.form_state.middlename"
        label="middlename"
        readonly
      >
      </v-text-field>
      <v-text-field
      v-model="$store.state.form_state.lastname"
        label="lastname"
        readonly
      >
      </v-text-field>

      <br>

      <h3>Step 2</h3>
      <v-text-field
        v-model="$store.state.form_state.reference_number_1"
        label="reference_number_1"
        readonly
      >
      </v-text-field>
      <v-text-field
      v-model="$store.state.form_state.reference_number_2"
        label="reference_number_2"
        readonly
      >
      </v-text-field>
      <v-text-field
      v-model="$store.state.form_state.reference_number_3"
        label="reference_number_3"
        readonly
      >
      </v-text-field>

      <br>

      <h3>Step 3</h3>
      <v-text-field
        v-model="$store.state.form_state.tracking_number_1"
        label="tracking_number_1"
        readonly
      >
      </v-text-field>
      <v-text-field
      v-model="$store.state.form_state.tracking_number_2"
        label="tracking_number_2"
        readonly
      >
      </v-text-field>
      <v-text-field
      v-model="$store.state.form_state.tracking_number_3"
        label="tracking_number_3"
        readonly
      >
      </v-text-field>

    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="$router.push('/step1')">Go to Step1</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        isLoading: false,
        snackbar: false,
        snackbarColor: null,
        message: null,
        loginForm: {
          username: 'superuser',
          password: 'p@ssw0rd'
        }
      }
    }
  }
</script>