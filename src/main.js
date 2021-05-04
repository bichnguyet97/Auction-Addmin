/*!

=========================================================
* Vue Argon Dashboard - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-argon-dashboard
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/vue-argon-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import VueCookies from 'vue-cookies';
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import firebase from "firebase"
import ArgonDashboard from './plugins/argon-dashboard'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueExcelXlsx from "vue-excel-xlsx";


Vue.use(VueExcelXlsx);

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.use(ArgonDashboard)

var Paginate = require('vuejs-paginate')
Vue.component('paginate', Paginate)

Vue.use(VueCookies);

Vue.use(VueLazyload)

firebase.initializeApp({
  apiKey: "AIzaSyAgT9AnK8vAq4HuiB0Ch4pJS8RafVjvtic",
  authDomain: "achauauction.firebaseapp.com",
  projectId: "achauauction",
  storageBucket: "achauauction.appspot.com",
  messagingSenderId: "461753979976",
  appId: "1:461753979976:web:9c212c6c1d3e287d27f47d",
  measurementId: "G-V5906GMSYT"
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
