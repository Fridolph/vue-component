<template>
  <div class="g-tab-body"><slot></slot></div>
</template>

<script>
export default {
  name: 'g-tab-body',
  inject: ['eventBus'],
  created() {
    // console.log('给BODY的eventBus', this.eventBus)
  }
}
</script>

<style lang="stylus" scoped>
.g-tab-body
  padding-top 10px
</style>
