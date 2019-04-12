import Vue from 'vue'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.config.devtools = true

import Icon from './components/Icon/Icon.vue'
import Button from './components/Button/Button.vue'
import ButtonGroup from './components/Button/ButtonGroup.vue'
import Input from './components/Input/Input.vue'


Vue.component('g-icon', Icon)
Vue.component('g-btn', Button)
Vue.component('g-btn-group', ButtonGroup)
Vue.component('g-input', Input)

export default new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
