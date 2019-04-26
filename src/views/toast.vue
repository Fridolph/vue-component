<template>
  <div>
    <g-btn @click="showToast('top')">toast 上</g-btn>
    <g-btn @click="showToast('middle')">toast 中</g-btn>
    <g-btn @click="showToast('bottom')">toast 下</g-btn>
  </div>
</template>

<script>
export default {
  name: 'page-toast',
  created() {
  },
  methods: {
    showToast(position) {
      this.$toast('我是 <b>Toast</b>, 文字很多文字很多文字很多文字很多文字很多文字很多. <a href="#">链接</a>', {
        enableHTML: true,
        autoClose: false,
        position,
        closeButton: {
          text: '知道',
          callback(toast) {
            toast.log()
          }
        }
      })
    }
  }
}
</script>
