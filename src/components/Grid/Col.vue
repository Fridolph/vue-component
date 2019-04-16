<template>
  <div class="g-col" :class="`g-col-${span}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'g-col',
  props: {
    span: {
      type: [Number, String]
    }
  }
}
</script>

<style lang="stylus" scoped>
$gridColumns = 24

.g-col
  min-height 50px
  background-color #a5a5ef
  &:nth-child(2n+1)
    background skyblue

for column in 1 .. $gridColumns
  .g-col-{column}
    width: (column / $gridColumns) * 100%
</style>
