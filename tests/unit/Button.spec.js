import {expect} from 'chai'
import Vue from 'vue'
import Button from '../../src/components/Button/Button.vue'
import ButtonGroup from '../../src/components/Button/ButtonGroup.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
  it('Exist', () => {
    const Ctor = Vue.extend(Button)
    const vm = new Ctor({}).$mount()
    expect(vm).to.exist
  })
})

describe('ButtonGroup', () => {
  it('Exist', () => {
    const Ctor = Vue.extend(ButtonGroup)
    const vm = new Ctor({}).$mount()
    expect(vm).to.exist
  })
})
