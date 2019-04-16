<template>
  <div
    class="g-col"
    :class="colCls "
    :style="colStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'g-col',
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
  },
  data() {
    return {
      gutter: 0,
    }
  },
  computed: {
    colCls() {
      let { span, offset } = this
      return [span && `g-col-span-${span}`, offset && `g-col-offset-${offset}`]
    },
    colStyle() {
      let { gutter } = this
      return {
        paddingLeft: gutter / 2 + 'px',
        paddingRight: gutter / 2 + 'px',
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
$gridColumns = 24

.g-col
  // min-height 50px
  text-align center
  // display inline-flex
  flex 0 0 1

for column in 1 .. $gridColumns
  .g-col-span-{column}
    width: (column / $gridColumns) * 100%

for offset in 1 .. $gridColumns
  .g-col-offset-{offset}
    margin-left: (offset / $gridColumns) * 100%
</style>
