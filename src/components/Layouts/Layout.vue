<template>
  <div :class="['g-layout', layoutClass]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'g-layout',
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      // console.log(vm.$options.name)
      if (vm.$options.name === 'g-sider') {
        this.layoutClass.hasSider = true
      }
    })
  }
}
</script>


<style lang="stylus" scoped>
.g-layout
  background #ffd
  display flex
  flex-direction column
  flex-grow 1
  &.hasSider
    flex-direction row
</style>
