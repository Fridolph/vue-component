import Vue from 'vue'
import Router from 'vue-router'
import pageHome from './views/home.vue'
import pageButton from './views/button.vue'
import pageInput from './views/input.vue'
import pageGrid from './views/grid.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: pageHome
    },
    {
      path: '/button',
      component: pageButton
    },
    {
      path: '/input',
      component: pageInput
    },
    {
      path: '/grid',
      component: pageGrid
    },
  ]
})

export default router
