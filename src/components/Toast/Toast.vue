<template>
  <div class="toast-mask">
    <div ref="toastText" :class="['toast', toastPositionCls]">
      <slot v-if="!enableHTML"></slot>
      <div v-else v-html="$slots.default[0]"></div>
      <i class="split-line-h" ref="line"></i>
      <span class="close" v-if="closeButton" @click="clickClose" v-html="closeButton.text">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'g-toast',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    delay: {
      type: Number,
      default: 5
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭',
          callback: undefined
        }
      }
    },
    enableHTML: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    toastPositionCls() {
      return `toast-position-${this.position}`
    }
  },
  mounted() {
    this.execAutoClose()
    this.updateStyles()
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.delay * 1000)
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        let {toastText} = this.$refs
        this.$refs.line.style.height = `${toastText.getBoundingClientRect().height}px`
        if (this.position === 'bottom') {
          toastText.style.top = `calc(100% - ${toastText.getBoundingClientRect().height}px)`
        }
      })
    },
    close() {
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    log() {
      console.log('log 测试')
    },
    clickClose() {
      this.close()
      if (this.closeButton && typeof  this.closeButton.callback === 'function') {
        // this === Toast的实例
        this.closeButton.callback(this)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.toast-mask
  position fixed
  z-index 1100
  left 0
  top 0
  right 0
  bottom 0
  width 100%
  height 100%
  background transparent

  .toast
    animation fadeIn 0.4s
    background-color rgba(66,66,66,0.7)
    border-radius 3px
    color #fff
    font-size 14px
    min-height 44px
    line-height 24px
    display flex
    position relative
    align-items center
    left 50%
    transform translate(-50%)
    &.toast-position-top
      top 0
    &.toast-position-middle
      top 50%
      transform translate(-50%, -50%)
    // &.toast-position-bottom

    @media screen and (min-width: 992px)
      width: 50%

    > div
      flex 1
      padding 8px 16px

    .split-line-h
      width 1px
      height 40px
      border-left 1px solid rgba(199,199,199,0.4)

    .close
      cursor pointer
      flex-shrink 0
      display block
      padding 16px

@keyframes fadeIn
  0%
    opacity 0
    transform translateY(100%)
  100%
    opacity 1
    transform translateY(0%)
</style>
