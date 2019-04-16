<template>
  <div class="g-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'g-row'
}
</script>

<style lang="stylus" scoped>
.g-row
  display flex
  flex-wrap wrap
  flex-shrink 0
</style>
