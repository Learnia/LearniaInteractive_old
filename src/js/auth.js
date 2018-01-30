import Vue from 'vue'

const mapTypeToConfig = require('../../services/config')
const Firebase = require('firebase')

Firebase.initializeApp(mapTypeToConfig('Firebase'))

Vue.prototype.$FireAuth = Firebase.auth()
Vue.prototype.$FireUser = Firebase.auth().currentUser

Firebase.auth().onAuthStateChanged(function (user) {
  console.log('Algo a cambiado en el usuario: ', user)
  // Vue.prototype.$FireUser = Firebase.auth().currentUser
  Vue.prototype.$FireUser = user
})

// Renderer auth
let authSignInWithGoogle = null
let authSignInWithGithub = null
let authSignInWithFacebook = null
let authEmailLogin = null
let authEmailCreateUser = null

// FirebaseUI auth
let authUI = null
let authUIConfig = null

// Comunes
let authLogout = null

const {
  ui,
  uiConfig,
  logout
} = require('./authWeb')

authUI = ui
authUIConfig = uiConfig
authLogout = logout

export {
  authSignInWithGoogle,
  authSignInWithGithub,
  authSignInWithFacebook,
  authEmailLogin,
  authEmailCreateUser,
  authLogout,
  authUI,
  authUIConfig
}
