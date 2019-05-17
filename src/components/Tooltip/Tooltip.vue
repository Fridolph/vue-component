<template>
  <div
    class="g-tooltip"
    @click.stop="onClick"
  >
    <div
      ref="tooltipContentWrap"
      class="tooltip-content"
      v-if="visible"
    >
      <slot name="content"></slot>
    </div>
    <div ref="trigger">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'g-tooltip',
  data() {
    return {
      visible: false,
    }
  },
  mounted() {
    // console.log(this.$refs)
  },
  methods: {
    onClick(event) {
      console.log(event.target)
      // this.visible = !this.visible
      // if (this.visible) {
      //   this.$nextTick(() => {
      //     document.body.appendChild(this.$refs.tooltipContentWrap)
      //     let { width, height, top, left } = this.$refs.trigger.getBoundingClientRect()
      //     console.log(width, height, top, left)
      //     this.$refs.tooltipContentWrap.style.left = left + window.scrollX + 'px'
      //     this.$refs.tooltipContentWrap.style.top = top + window.scrollY - (height + 30) + 'px'
      //     let eventHandler = () => {
      //       this.visible = false
      //       document.removeEventListener('click', eventHandler)
      //     }
      //     document.addEventListener('click', eventHandler)
      //   })
      // }
    },
  },
}
</script>

<style lang="stylus" scoped>
.g-tooltip
  display inline-block
  vertical-align top
  position relative

.tooltip-content
  position absolute
  // bottom calc(100% + 10px)
  // left 0
  background #fff
  border 1px solid #dfdfdf
  border-radius 3px
  padding 10px

</style>
