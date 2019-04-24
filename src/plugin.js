import Toast from './components/Toast/Toast.vue'

let currentToast = null

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions, onClose) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({message, toastOptions, onClose: () => {
        currentToast = null
      }})

      function createToast({message, toastOptions, onClose}) {
        let Ctor = Vue.extend(Toast)
        let toast = new Ctor({ propsData: toastOptions })
        // toast message
        toast.$slots.default = [message]
        toast.$mount()
        toast.$on('close', onClose)
        document.body.appendChild(toast.$el)
        return toast
      }
    }
  }
}
