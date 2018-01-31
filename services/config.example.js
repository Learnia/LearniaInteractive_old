
// Para hacer funcionar la web tienes que renombrar este archivo config.example.js a
// config.js y luego poner las credenciales de tus cuentas en firebase, etc. Por
// defecto el archivo confgi.js esta ignorado y no será compartido en un repositorio
// git.

// Configuracion de autenticacion OAuth

// Github
const GitHub = {
  client_id: '',
  client_secret: '',
  scope: 'read:user',
  redirect_uri: '',
  authorize_url: 'https://github.com/login/oauth/authorize',
  access_token_url: 'https://github.com/login/oauth/access_token'
}

// Client-side Web Applications
// Impolicit Flow
const GoogleClientWebApp = {
  client_id: '',
  client_secret: '',
  redirect_uri: '',
  authorize_url: 'https://accounts.google.com/o/oauth2/v2/auth',
  response_type: 'token',
  scope: 'https://www.googleapis.com/auth/userinfo.profile'
}

// Web Server Applications
const GoogleWebServerApp = {
  client_id: '',
  client_secret: '',
  redirect_uri: '',
  authorize_url: 'https://accounts.google.com/o/oauth2/v2/auth',
  access_token_url: 'https://www.googleapis.com/oauth2/v4/token',
  access_type: 'online',
  response_type: 'code',
  scope: 'https://www.googleapis.com/auth/userinfo.profile'
}

const FacebookImplicit = {
  client_id: '',
  client_secret: '',
  authorize_url: 'https://www.facebook.com/v2.11/dialog/oauth',
  response_type: 'token',
  redirect_uri: 'https://www.facebook.com/connect/login_success.html'
}

const FacebookAuthCode = {
  client_id: '',
  client_secret: '',
  authorize_url: 'https://www.facebook.com/v2.11/dialog/oauth',
  access_token_url: 'https://graph.facebook.com/v2.11/oauth/access_token',
  redirect_uri: 'https://www.facebook.com/connect/login_success.html'
}

/* const Twitter = {
  oauth_consumer_key: "your consumer key",
  oauth_consumer_secret: "your consumer secret",
  request_token_url: "https://api.twitter.com/oauth/request_token",
  authenticate_url: "https://api.twitter.com/oauth/authenticate",
  access_token_url: "https://api.twitter.com/oauth/access_token",
  callback_url: "your callback url"
}

const LinkedIn = {
  response_type: "code",
  client_id: "your consumer secret",
  redirect_uri: "https://www.linkedin.com/oauth/v2/authorization",
  state: "https://www.linkedin.com/oauth/v2/authorization",
  scope: "https://www.linkedin.com/oauth/v2/authorization"
} */

const Firebase = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
}

const mapTypeToConfig = type => {
  return {
    Firebase,
    GoogleClientWebApp,
    GoogleWebServerApp,
    FacebookImplicit,
    FacebookAuthCode,
    GitHub
  }[type]
}

module.exports = mapTypeToConfig
