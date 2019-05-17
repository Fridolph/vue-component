<template>
  <div class="comp-view">
    <div class="side-menu">
      <div class="link-item" v-for="item in menu" :key="item.name">
        <router-link :to="item.path">{{item.name}}</router-link>
      </div>
    </div>
    <div class="main-wrap">
      <template v-if="$route.name.indexOf('-') >= 0">
        <h2 class="module-title">{{$route.name}}</h2>
      </template>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {routes} from './router'
export default {
  data() {
    return {
      menu: routes
    }
  }
}
</script>


<style lang="stylus" scoped>
.comp-view
  position relative
  .module-title
    font-size 22px
    color #58aed2
    margin-bottom 20px

  .side-menu
    position fixed
    left 20px
    top 30px
    height calc(100vh - 90px)
    padding-top 30px
    width 170px
    overflow hidden
    overflow-y auto
    border-right 1px dashed #ccc
    .link-item
      padding 6px
      height 32px
      line-height 20px
      > a
        color #666
        text-decoration none
      .router-link-exact-active
        color #58aed2

  .main-wrap
    margin-left 220px
    height calc(100vh - 35px)
    overflow hidden
    overflow-y auto
    padding 20px 40px 25px 0

</style>
