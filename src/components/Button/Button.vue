<template>
  <button class="g-btn" :class="{[`vc-${iconPosition}`]: true}" @click="$emit('click')">
    <!-- <i v-if="icon" :class="`vc vc-${icon}`"></i> -->
    <template v-if="loading">
      <g-icon type="loading"></g-icon>
      <div class="content">
        Loading
      </div>
    </template>

    <template v-else>
      <g-icon :type="icon"></g-icon>
      <div class="content">
        <slot></slot>
      </div>
    </template>
  </button>
</template>

<script>
export default {
  name: 'g-button',
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: 'left'
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus">
.g-btn
  display inline-flex
  justify-content center
  align-items center
  height: var(--btn-height)
  padding: 0 0.8em
  font: inherit
  vertical-align top
  border-radius: var(--btn-radius)
  border: 1px solid var(--btn-borderColor)
  background-color: var(--btn-bg)
  font-size: var(--btn-fontSize)
  .vc
    order 1
      margin 0 0.2em 0 0
  .content
    order 2
  &:hover
    position relative
    z-index 1
    border-color: var(--btn-color_hover)
  &:active
    background-color: var(--btn-bg_active)
  &:focus
    outline: none

  &.vc-right
    .vc
      margin 0 0 0 0.2em
      order 2
    .content
      order 1

  .vc-loading
    margin 0 0.2em 0 0
    animation spin 1s linear infinite

@keyframes spin
  0%
    transform rotate(0)
  100%
    transform rotate(360deg)
</style>
