<template>
  <div>Toast</div>
</template>

<script>
import Vue from 'vue'

Vue.prototype.$toast = (value = 'toast init...') => {
  console.log(value)
}
export default {
  name: 'g-toast'
}
</script>
