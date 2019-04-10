<template>
  <div class="g-btn-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'g-btn-group',
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`g-button-group 的子元素应该全是 g-button , 但现在是 ${name}`)
      }
    }
  }
}
</script>

<style lang="stylus">
.g-btn-group
  display inline-flex
  .g-btn
    border-radius 0
    margin-left -1px
    &:first-child
      border-radius var(--btn-radius) 0 0 var(--btn-radius)
      margin-left 0
    &:last-child
      border-radius 0 var(--btn-radius) var(--btn-radius) 0
</style>
