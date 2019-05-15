<template>
  <div class="g-tab-head">
    <slot></slot>
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
export default {
  name: 'g-tab-head',
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (nav, vm) => {
      let { width, height, top, left } = vm.$el.getBoundingClientRect()
      console.log('head触发', vm.$el.getBoundingClientRect())
      // this.$refs.line.style.width = `${width}px`
    })
  }
}
</script>

<style lang="stylus" scoped>
$tab-height: 40px

.g-tab-head
  display flex
  height $tab-height
  align-items center
  border 1px solid #dedede
  position relative
  .line
    position absolute
    bottom 0
    border-bottom px solid skyblue
</style>
