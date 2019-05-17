<template>
  <div :class="['g-tab-nav', cls]" @click="selectNav" :data-name="name">
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
    name: {
      type: String | Number,
      required: true
    }
  },
  data() {
    return {
      active: false
    }
  },
  computed: {
    cls() {
      return {
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  created() {
    if (this.eventBus) {
      this.eventBus.$on('update:selected', (name, vm) => {
        if (name === this.name) {
          // console.log(`[x] ${this.name}nav被选中了`, vm.$el)
          this.active = true
        } else {
          // console.log(`[ ] ${this.name}nav没被选中`)
          this.active = false
        }
      })
    }
  },
  methods: {
    selectNav() {
      if (!this.disabled) {
        this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
        this.$emit('click', this)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.g-tab-nav
  padding 0 1em
  line-height 30px
  cursor pointer
  &.active
    color skyblue
    font-weight bold
  &.disabled
    color #ccc
    cursor not-allowed
    user-select none
</style>
