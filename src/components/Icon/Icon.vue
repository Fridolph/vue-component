<template>
  <i :class="`vc vc-${type}`"></i>
</template>

<script>
export default {
  name: 'g-icon',
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>
