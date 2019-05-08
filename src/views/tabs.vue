<template>
  <div>
    <g-tabs selected="体育">
      <g-tab-head>
        <g-tab-nav name="体育">体育</g-tab-nav>
        <g-tab-nav name="财经">财经</g-tab-nav>
        <g-tab-nav name="新闻">新闻</g-tab-nav>
      </g-tab-head>
      <g-tab-body>
        <g-tab-pane name="体育">体育咨询</g-tab-pane>
        <g-tab-pane name="财经">财经咨询</g-tab-pane>
        <g-tab-pane name="新闻">新闻咨询</g-tab-pane>
      </g-tab-body>
    </g-tabs>
  </div>
</template>

<script>
export default {
  name: 'page-tabs'
}
</script>
