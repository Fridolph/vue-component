<template>
  <div
    class="g-row"
    :style="rowStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'g-row',
  props: {
    gutter: [Number, String],
  },
  computed: {
    rowStyle() {
      let { gutter } = this
      return {
        marginLeft: -gutter / 2 + 'px',
        marginRight: -gutter / 2 + 'px',
      }
    },
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter
    })
  },
}
</script>

<style lang="stylus" scoped>
.g-row
  display flex
  flex-wrap wrap
  flex-shrink 0
</style>
