<template>
  <div class="g-btn-group">
    <slot></slot>
  </div>
</template>

<script>
export default {

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
    &:last-child
      border-radius 0 var(--btn-radius) var(--btn-radius) 0
</style>
