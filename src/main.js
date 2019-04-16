import Vue from 'vue'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.config.devtools = true

import Icon from './components/Icon/Icon.vue'
import Button from './components/Button/Button.vue'
import ButtonGroup from './components/Button/ButtonGroup.vue'
import Input from './components/Input/Input.vue'
import Row from './components/Grid/Row.vue'
import Col from './components/Grid/Col.vue'
import Layout from './components/Layouts/Layout.vue'
import Sider from './components/Layouts/Sider.vue'
import Content from './components/Layouts/Content.vue'
import Header from './components/Layouts/Header.vue'
import Footer from './components/Layouts/Footer.vue'


Vue.component('g-icon', Icon)
Vue.component('g-btn', Button)
Vue.component('g-btn-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-header', Header)
Vue.component('g-footer', Footer)

export default new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
