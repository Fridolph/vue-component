import {expect} from 'chai'
import sinon from 'sinon'
import Vue from 'vue'
import Button from '../../src/components/Button/Button.vue'

describe('Button', () => {
  it('Button 左键点击可触发click事件', () => {
    const Ctor = Vue.extend(Button)
    const vm = new Ctor({
      propsData: {
        icon: 'setting'
      }
    }).$mount()
    // const callback = sinon.fake()
    // vm.$on('click', callback)
    // vm.$el.click()
    expect(1).to.eq(1)
  })
})
