<template>
  <div class="g-tab-head"><slot></slot></div>
</template>

<script>
export default {
  name: 'g-tab-head',
  inject: ['eventBus'],
  created() {
    console.log('给HEAD的eventBus', this.eventBus)
  }
}
</script>

<style lang="stylus" scoped>
$tab-height: 40px

.g-tab-head
  display flex
  height $tab-height
  align-items center
  border 1px solid #dedede
</style>
