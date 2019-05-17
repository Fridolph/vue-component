<template>
  <div class="g-tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'g-tabs',
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    // console.log('tabs $children', this.$children)
    if (this.$children.length === 0) {
      console.warn('tabs的子组件应该是 g-tab-head和g-tab-body，请传入')
    }
    this.$children.forEach(vm => {
      if (vm.$options.name === 'g-tab-head') {
        vm.$children.forEach(nav => {
          if (nav.$options.name === 'g-tab-nav' && nav.name === this.selected) {
            this.eventBus.$emit('update:selected', this.selected, nav)
          }
        })
      }
    })
    // this.eventBus.$emit('update:selected', this.selected)
  }
}
</script>
