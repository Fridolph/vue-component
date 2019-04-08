Vue.component('v-btn', {
  props: {
    msg: {
      type: String,
      default: 'hello world'
    }
  },
  template: `<button>
    {{ msg }}
  </button>`
})
