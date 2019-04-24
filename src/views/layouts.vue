<template>
  <div>
    <h3>上中下布局</h3>
    <g-layout style="min-height: 500px">
      <g-header class="demo-header">Header</g-header>
      <g-layout class="demo-main">
        <g-sider class="demo-sider">Sider</g-sider>
        <g-content class="demo-content">Content</g-content>
      </g-layout>
      <g-footer class="demo-footer">Footer</g-footer>
    </g-layout>

    <h3>左右布局</h3>
    <g-layout style="min-height: 500px">
      <g-sider>Sider</g-sider>
      <g-layout>
        <g-header>Header</g-header>
        <g-content>Content</g-content>
        <g-footer>Footer</g-footer>
      </g-layout>
    </g-layout>

    <h3>左右固定，中间自适应</h3>
    <g-layout>
      <g-sider style="width: 200px">Sider</g-sider>
      <g-content>Sider</g-content>
      <g-sider style="width: 200px">Sider</g-sider>
    </g-layout>
  </div>
</template>

<script>
export default {
  name: 'page-layouts',
  data() {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.demo-header, .demo-footer
  min-height 100px

</style>
