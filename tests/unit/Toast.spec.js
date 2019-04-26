import chai, { expect } from 'chai'
import sinon from 'sinon'
import Vue from 'vue'
import Toast from '../../src/components/Toast/Toast.vue'

chai.use(require('sinon-chai'))

describe('Toast', () => {
  it('Exist', () => {
    expect(Toast).to.exist
  })

  describe('props', () => {
    it('autoClose', done => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Ctor = Vue.extend(Toast)
      const vm = new Ctor({
        propsData: {
          autoClose: true,
          delay: 1,
        },
      }).$mount(div)

      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })

    it('closeButton', () => {
      const callback = sinon.fake()
      const Ctor = Vue.extend(Toast)
      const vm = new Ctor({
        propsData: {
          closeButton: {
            text: '关闭吧',
            callback,
          },
        },
      }).$mount()
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('关闭吧')
      closeButton.click()
      expect(callback).to.have.been.called
    })

    it('closeButton -> enableHTML', () => {
      const Ctor = Vue.extend(Toast)
      const vm = new Ctor({
        propsData: {
          enableHTML: true,
        },
      })
      vm.$slots.default = ['<strong id="test">hhh!!!</strong>']
      vm.$mount()
      let $strong = vm.$el.querySelector('#test')
      expect($strong).to.exist
    })

    it('position', () => {
      const Ctor = Vue.extend(Toast)
      const vm = new Ctor({
        propsData: {
          position: 'bottom',
        },
      }).$mount()
      expect(vm.$el.querySelector('.toast').classList.contains('toast-position-bottom')).to.eq(true)
    })
  })
})
