<template>
  <div class="comp-view">
    <h2 class="logo-title">Vue Component</h2>
    <div class="side-menu">
      <div> <router-link to="/">首页</router-link> </div>
      <div> <router-link to="/button">Button</router-link> </div>
      <div> <router-link to="/input">Input</router-link> </div>
      <div> <router-link to="/grid">Grid</router-link> </div>
    </div>
    <div class="main-wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.comp-view
  position relative
  .logo-title
    padding 20px 0
    // margin-bottom 20px
    text-align center
  .side-menu
    position fixed
    left 20px
    top 80px
    height calc(100vh - 90px)
    width 140px
    overflow hidden
    overflow-y auto
    border-right 1px dashed #ccc
  .main-wrap
    margin-left 200px
    height calc(100vh - 75px)
    overflow hidden
    overflow-y auto
    padding-right 40px
</style>
