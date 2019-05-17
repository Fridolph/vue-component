import Vue from 'vue'
import chai, { expect } from 'chai'
import sinon from 'sinon'
// 依赖组件
import Tabs from '../../src/components/Tabs/Tabs.vue'
import TabHead from '../../src/components/Tabs/Head.vue'
import TabNav from '../../src/components/Tabs/Nav.vue'
import TabBody from '../../src/components/Tabs/Body.vue'
import TabPane from '../../src/components/Tabs/Pane.vue'

chai.use(require('sinon-chai'))

Vue.config.productionTip = false
Vue.config.devtools = false

Vue.component('g-tabs', Tabs)
Vue.component('g-tab-head', TabHead)
Vue.component('g-tab-nav', TabNav)
Vue.component('g-tab-body', TabBody)
Vue.component('g-tab-pane', TabPane)

describe('Tabs', () => {
  it('exist', () => {
    expect(Tabs).to.exist
  })

  it('props: selected', done => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `<g-tabs selected="财经">
        <g-tab-head>
        <g-tab-nav name="体育">体育</g-tab-nav>
        <g-tab-nav name="财经">财经</g-tab-nav>
        <g-tab-nav name="新闻">新闻</g-tab-nav>
        <g-tab-nav name="未知" disabled>未知</g-tab-nav>
      </g-tab-head>
      <g-tab-body>
        <g-tab-pane name="体育">体育咨询</g-tab-pane>
        <g-tab-pane name="财经">财经咨询</g-tab-pane>
        <g-tab-pane name="新闻">新闻咨询</g-tab-pane>
        <g-tab-pane name="未知">未知的？</g-tab-pane>
      </g-tab-body>
    </g-tabs>`
    let vm = new Vue({ el: div })

    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.g-tab-nav[data-name="财经"]`)
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })
})

describe('TabNav', () => {
  it('exist', () => {
    expect(TabNav).to.exist
  })

  it('props: name', () => {
    const Ctor = Vue.extend(TabNav)
    const vm = new Ctor({
      propsData: {
        name: 'xxx'
      }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
  })

  it('props: disabled', () => {
    const Ctor = Vue.extend(TabNav)
    const vm = new Ctor({
      propsData: {
        disabled: true
      }
    }).$mount()
    expect(vm.$el.classList.contains('disabled')).to.be.true
    // 测试无法被点击
    const callback = sinon.fake()
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })
})
