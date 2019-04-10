<template>
  <div>
    <g-btn>default</g-btn>
    <g-btn icon="download">下载</g-btn>
    <g-btn
      icon="setting"
      icon-position="right"
    >设置</g-btn>
    <g-btn
      :loading="btnLoading1"
      @click="btnLoading1 = !btnLoading1"
    >加载中...</g-btn>
    <g-btn-group>
      <g-btn icon="zuo"></g-btn>
      <g-btn>test</g-btn>
      <g-btn icon="you"></g-btn>
    </g-btn-group>
  </div>
</template>

<script>
export default {
  name: 'page-button',
  data() {
    return {
      btnLoading1: false
    }
  }
}
</script>
