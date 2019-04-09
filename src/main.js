import Vue from 'vue'
import Icon from './components/Icon/Icon.vue'
import Button from './components/Button/Button.vue'
import ButtonGroup from './components/Button/ButtonGroup.vue'

Vue.component('g-icon', Icon)
Vue.component('g-btn', Button)
Vue.component('g-btn-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    btnLoading1: false
  }
})
