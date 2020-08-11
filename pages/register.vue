<template>
  <v-app>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card class="elevation-12 mb-5 pa-5" color="primary">
            <v-card-text class="mt-4 text-center">
              <span class="display-3">Register</span>
            </v-card-text>
          </v-card>

          <v-card class="elevation-12">
            <v-toolbar
              color="primary"
              flat
            >
              <v-toolbar-title>
                <span class="title">Already a member?</span>
                <v-btn text :loading="isLoading" @click="ProceedToLogin">Login here</v-btn>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text class="mt-4">
              <v-form>
                <v-text-field
                  v-model="loginForm.username"
                  label="Username"
                  prepend-icon="mdi-account"
                  type="text"
                />

                <v-text-field
                  v-model="loginForm.password"
                  label="Password"
                  prepend-icon="mdi-lock"
                  type="password"
                />
                <v-text-field
                  v-model="loginForm.repeatPassword"
                  label="Repeat Password"
                  prepend-icon="mdi-lock"
                  type="password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="secondary" :loading="isLoading" @click="Login">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-snackbar
      v-model="snackbar"
      top
      :color="snackbarColor"
      multi-line
      :timeout="2000"
    >
      {{ message }}
    </v-snackbar>
  </v-app>
</template>

<script>
  export default {
    layout: 'register',
    data () {
      return {
        isLoading: false,
        snackbar: false,
        snackbarColor: null,
        message: null,
        loginForm: {
          username: 'superuser',
          password: 'p@ssw0rd',
          repeatPassword: 'p@ssw0rd'
        }
      }
    },
    methods: {
      async Login () {
        const app = this
        app.isLoading = true

        let response = await app.$auth.login(app.loginForm)

        if (!response.success) {
          app.showSnackbar(response.error, 'error')
          app.isLoading = false
          return
        }
        
        document.location.reload()
      },
      ProceedToLogin () {
          this.$router.push('/login')
      },
      showSnackbar (message, color) {
        this.snackbar = true;
        this.message = message;
        this.snackbarColor = color
      }
    }

  }
</script>