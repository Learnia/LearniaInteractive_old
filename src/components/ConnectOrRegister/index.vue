<template>
  <v-card dark>
    <v-card-title>
      <h2>Connect</h2>
    </v-card-title>
    <v-card-text>
      <div class="elevation-1">
        <div id="firebaseui-auth-container"></div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import swal from 'sweetalert'

const {
  authEmailCreateUser,
  authEmailLogin,
  authSignInWithGoogle,
  authSignInWithGithub,
  authSignInWithFacebook,
  authUI,
  authUIConfig
} = require('../../js/auth')

authUI.start('#firebaseui-auth-container', authUIConfig)

export default {
  data: () => ({
    valid: true,
    e1: true,
    password: '',
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /^\w+([\u002E-]?\w+)*@\w+([\u002E-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    select: null
  }),
  methods: {
    register () {
      console.log('comenzando el registro')
      let isCreated = authEmailCreateUser(this.email, this.password)

      if (isCreated) {
        // TODO: Arreglar, cuando hay problemas de internet no sale este mensaje
        swal('Registrado correctamente!!')
        this.$router.push('/inside')
      }
    },
    connect () {
      authEmailLogin(this.email, this.password)
    },
    googleSignIn () {
      authSignInWithGoogle()
    },
    githubSignIn () {
      authSignInWithGithub()
    },
    facebookSignIn () {
      authSignInWithFacebook()
    }
  }
}
</script>
