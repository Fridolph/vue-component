import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/home.vue'
import ButtonPage from './views/button.vue'
import InputPage from './views/Input.vue'

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
    },
    {
      path: '/input',
      component: InputPage
    }
  ]
})

export default router
