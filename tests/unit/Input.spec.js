import Vue from 'vue'
import chai from 'chai'
import sinon from 'sinon'
import Input from '../../src/components/Input/Input.vue'

chai.use(require('sinon-chai'))

describe('Input', () => {
  let vm = null
  const Ctor = Vue.extend(Input)

  describe('Component', () => {
    it('Exist', () => {
      expect(Input).to.exist
    })
  })

  describe('props', () => {
    afterEach(() => {
      vm.$destroy()
    })

    it('value', () => {
      vm = new Ctor({
        propsData: {
          value: '1234'
        }
      }).$mount()
      const $input = vm.$el.querySelector('input')
      expect($input.value).to.equal('1234')

    })

    it('disabled', () => {
      vm = new Ctor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const $input = vm.$el.querySelector('input')
      expect($input.disabled).to.equal(true)

    })

    it('readonly', () => {
      vm = new Ctor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const $input = vm.$el.querySelector('input')
      expect($input.readOnly).to.equal(true)
    })

    it('valid & tips', () => {
      vm = new Ctor({
        propsData: {
          valid: 'pass',
          tips: '告警'
        }
      }).$mount()
      const $icon = vm.$el.querySelector('.vc')
      expect($icon).to.exist
      const $tips = vm.$el.querySelector('.tips')
      expect($tips.innerHTML).to.equal('告警')
    })
  })

  describe('Event', () => {
    let vm = null
    const Ctor = Vue.extend(Input)

    it('change / focus / blur', () => {
      ['change', 'focus', 'blur'].forEach(eventName => {
        vm = new Ctor({}).$mount()
        const cb = sinon.fake()
        vm.$on(eventName, cb)
        // 触发change事件
        let event = new Event(eventName)
        let $input = vm.$el.querySelector('input')
        $input.dispatchEvent(event)
        expect(cb).to.have.been.calledWith(event)
      })
    })

    it('input', () => {
      vm = new Ctor({}).$mount()
      const cb = sinon.fake()
      vm.$on('input', cb)
      // 触发change事件
      let event = new Event('input')
      // 兼容v-model
      Object.defineProperty(event, 'target', {
        value: {
          value: 'hi'
        },
        enumerable: true
      })
      let $input = vm.$el.querySelector('input')
      $input.dispatchEvent(event, 'v-model')
      expect(cb).to.have.been.calledWith('hi')
    })
  })
})
