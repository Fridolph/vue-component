<template>
  <div v-if="active" class="tab-pane" :class="active ? 'active' : ''">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'g-tab-pane',
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
  created() {
    this.eventBus.$on('update:selected', name => {
      if (name === this.name) {
        // console.log(`[x] ${this.name}pane被选中了`)
        this.active = true
      } else {
        // console.log(`[ ] ${this.name}pane没被选中`)
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
.tab-pane
  flex-shrink 0
</style>
