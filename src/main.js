// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// css imports
import './assets/css/bootstrap.min.css'
import './assets/css/carousel.css'
import './assets/css/app.css'
// css imports
// import './assets/js/jquery.mixitup.min'
import Nav from './components/Nav.vue'

Vue.config.productionTip = false

Vue.component('app-nav', Nav)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
