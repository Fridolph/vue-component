import {expect} from 'chai'
import Vue from 'vue'
import Row from '../../src/components/Grid/Row.vue'
import Col from '../../src/components/Grid/Col.vue'

describe('Grid', () => {

  describe('Row', () => {
    it('Row Exist', () => {
      expect(Row).to.exist
    })

    it('props -> gutter', done => {
      Vue.component('g-row', Row)
      Vue.component('g-col', Col)
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `<g-row gutter="20">
        <g-col span="12"></g-col>
        <g-col span="12"></g-col>
      </g-row>`
      const vm = new Vue({ el: div })
      setTimeout(() => {
        const row = vm.$el.querySelector('.g-row')
        const cols = vm.$el.querySelectorAll('.g-col')

        expect(getComputedStyle(row).marginLeft).to.eq('-10px')
        expect(getComputedStyle(row).marginRight).to.eq('-10px')

        expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
        expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
        done()
      }, 99)
    })
  })

  describe('Row', () => {
    it('Col Exist', () => {
      expect(Col).to.exist
    })

    it('props -> span & offset', done => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const ColCtor = Vue.extend(Col)
      const vm = new ColCtor({
        propsData: {
          span: 1,
          offset: 1
        }
      }).$mount(div)
      setTimeout(() => {
        expect(vm.$el.classList.contains('g-col-span-1')).to.eq(true)
        expect(vm.$el.classList.contains('g-col-offset-1')).to.eq(true)
        div.remove()
        vm.$destroy()
        done()
      }, 99)
    })

    it('responsive', done => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const ColCtor = Vue.extend(Col)
      const vm = new ColCtor({
        propsData: {
          xs: { span: 12 },
          sm: { span: 12 },
          md: { span: 12 },
          lg: { span: 12 },
          xl: { span: 12 },
          xxl: { span: 12 },
        }
      }).$mount(div)
      let rps = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].map(v => (`g-col-${v}-12`))
      setTimeout(() => {
        rps.forEach(v => expect(vm.$el.classList.contains(v)).to.eq(true))
        div.remove()
        vm.$destroy()
        done()
      }, 99)
    })
  })
})
