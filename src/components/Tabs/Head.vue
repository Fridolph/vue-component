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
      // console.log('head触发', vm.$el.getBoundingClientRect())
      this.$nextTick(() => {
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left - 200}px`
      })
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
  position relative
  border-bottom 1px solid #dedede
  .line
    position absolute
    bottom 0
    border-bottom 2px solid skyblue
    transition 0.3s
  .action-wrapper
    margin-left auto
    display flex
    align-items center
    justify-content center
</style>
