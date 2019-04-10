import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/home.vue'
import ButtonPage from './views/button.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/button',
      component: ButtonPage
    }
  ]
})

export default router
