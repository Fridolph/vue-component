<template>
  <div class="g-tab-nav" @click="xxx" :class="active ? 'active' : ''">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'g-tab-nav',
  inject: ['eventBus'],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: String | Number,
    required: true
  },
  data() {
    return {
      active: false,
    }
  },
  created() {
    this.eventBus.$on('update:selected', name => {
      if (name === this.name) {
        console.log(`[x] ${this.name}nav被选中了`)
        this.active = true
      } else {
        console.log(`[ ] ${this.name}nav没被选中`)
        this.active = false
      }
    })
  },
  methods: {
    xxx() {
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>

<style lang="stylus" scoped>
.g-tab-nav
  padding 0 1em
  cursor pointer
  &.active
    color red
</style>
