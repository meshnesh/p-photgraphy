import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Grid from '@/components/Grid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    }
  ],
  mode: 'history'
})
