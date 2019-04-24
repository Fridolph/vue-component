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
let validator = value => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if (!['span', 'offset'].indexOf(key) >= 0) valid = false
  })
  return valid
}

export default {
  name: 'g-col',
  props: {
    span: {
      type: [Number, String],
      default: 24
    },
    offset: {
      type: [Number, String],
    },
    xs: { type: Object, validator },
    sm: { type: Object, validator },
    md: { type: Object, validator },
    lg: { type: Object, validator },
    xl: { type: Object, validator },
    xxl: { type: Object, validator },
  },
  data() {
    return {
      gutter: 0,
    }
  },
  computed: {
    colCls() {
      let { span, offset, xs, sm, md, lg, xl, xxl } = this
      return [
        span && `g-col-span-${span}`,
        offset && `g-col-offset-${offset}`,
        ...(xs ? [`g-col-xs-${xs.span}`] : []),
        ...(sm ? [`g-col-sm-${sm.span}`] : []),
        ...(md ? [`g-col-md-${md.span}`] : []),
        ...(lg ? [`g-col-lg-${lg.span}`] : []),
        ...(xl ? [`g-col-xl-${xl.span}`] : []),
        ...(xxl ? [`g-col-xxl-${xxl.span}`] : []),
      ]
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
    &-span-{column}
      width: (column / $gridColumns) * 100%

  for offset in 1 .. $gridColumns
    &-offset-{offset}
      margin-left: (offset / $gridColumns) * 100%

  @media (max-width: 576px)
    for $n in 1 .. $gridColumns
      &-xs-{$n}
        width ($n / 24) * 100%
  @media (min-width: 577px) and (max-width: 768px)
    for $n in 1 .. $gridColumns
      &-sm-{$n}
        width ($n / 24) * 100%
  @media (min-width: 769px) and (max-width: 991px)
    for $n in 1 .. $gridColumns
      &-md-{$n}
        width ($n / 24) * 100%
  @media (min-width: 992px) and (max-width: 1199px)
    for $n in 1 .. $gridColumns
      &-lg-{$n}
        width ($n / 24) * 100%
  @media (min-width: 1200px) and (max-width: 1599px)
    for $n in 1 .. $gridColumns
      &-xl-{$n}
        width ($n / 24) * 100%
  @media (min-width: 1600px)
    for $n in 1 .. $gridColumns
      &-xxl-{$n}
        width ($n / 24) * 100%

</style>
