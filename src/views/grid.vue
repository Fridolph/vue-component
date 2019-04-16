<template>
  <div>
    <h3>Grid - 栅格系统</h3>
    <g-row>
      <g-col span="12"></g-col>
      <g-col span="12"></g-col>
    </g-row>
    <br>
    <g-row>
      <g-col span="8"></g-col>
      <g-col span="8"></g-col>
      <g-col span="8"></g-col>
    </g-row>
    <br>
    <g-row :gutter="16">
      <g-col span="6"></g-col>
      <g-col span="6"></g-col>
      <g-col span="6"></g-col>
      <g-col span="6"></g-col>
    </g-row>
  </div>
</template>

<script>
export default {
  name: 'page-grid',
  data() {
    return {

    }
  }
}
</script>

<style lang="stylus">
.custom-col
  height 50px
  background red
</style>
