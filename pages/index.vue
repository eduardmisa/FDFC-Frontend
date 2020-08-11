<template>

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
    },
    async mounted () {
      const app = this
      await app.$store.dispatch('form_state/FETCH_UserFormState')
      app.$router.push('/step1')
    }
  }
</script>