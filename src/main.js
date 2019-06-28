import Vue from 'vue'
import App from './component/App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import router from './router'
import Vuex from 'vuex'
import Vuelidate from 'vuelidate'
// import * as firebase from 'firebase/app'

import store from './store'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(Vuelidate)
Vue.config.productionTip = false

// var firebaseConfig = {
//   apiKey: "AIzaSyDGfUKquLiWC6arTOOxUaF_VOCqSQ8h_JE",
//   authDomain: "on-store-d55ec.firebaseapp.com",
//   databaseURL: "https://on-store-d55ec.firebaseio.com",
//   projectId: "on-store-d55ec",
//   storageBucket: "on-store-d55ec.appspot.com",
//   messagingSenderId: "319793759243",
//   appId: "1:319793759243:web:2fb4120452b96012"
// }
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig)

Vue.http.options.root = 'https://on-store-d55ec.firebaseio.com/'

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  created() {
   
  }
})
