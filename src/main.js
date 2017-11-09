// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
// css imports
import './assets/css/bootstrap.min.css'
import './assets/css/carousel.css'
import './assets/css/app.css'

// js imports
// import './assets/js/slider/waypoints.min'
// import './assets/js/slider/bootstrap.min'
// import './assets/js/slider/scripts'
// import './assets/js/slider/jquery.flexslider'
// import './assets/js/slider/modernizr'

// import './assets/js/jquery.mixitup.min'
import Nav from './components/Nav.vue'
import Client from './components/Client.vue'
import Contact from './components/Contact.vue'

Vue.config.productionTip = false
Vue.use($)
Vue.component('app-nav', Nav)
Vue.component('app-client', Client)
Vue.component('app-contact', Contact)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
