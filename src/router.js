import Vue from 'vue'
import Router from 'vue-router'
import pageHome from './views/home.vue'
import pageButton from './views/button.vue'
import pageInput from './views/input.vue'
import pageGrid from './views/grid.vue'
import pageLayouts from './views/layouts.vue'
import pageToast from './views/toast.vue'
import pageTabs from './views/tabs.vue'
import pageTooltip from './views/tooltip.vue'

Vue.use(Router)

export const routes = [
  {
    name: 'Home',
    path: '/',
    component: pageHome
  },
  {
    name: 'Button - 按钮',
    path: '/button',
    component: pageButton
  },
  {
    name: 'Input - 输入框',
    path: '/input',
    component: pageInput
  },
  {
    name: 'Grid - 栅格系统',
    path: '/grid',
    component: pageGrid
  },
  {
    name: 'Layouts - 布局',
    path: '/layouts',
    component: pageLayouts
  },
  {
    name: 'Toast - 遮罩',
    path: '/toast',
    component: pageToast
  },
  {
    name: 'Tabs - 标签页',
    path: '/tabs',
    component: pageTabs
  },
  {
    name: 'Tooltip - 文字提示',
    path: '/tooltip',
    component: pageTooltip
  }
]

const router = new Router({
  routes
})

export default router
