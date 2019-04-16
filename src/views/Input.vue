<template>
  <div>
    <h4>基础</h4>
    <g-input value="你好吗"></g-input>
    <g-input value="禁用" :disabled="true"></g-input>
    <g-input value="readonly" :readonly="true"></g-input>
    <g-input valid="warn" tips="警告"></g-input>
    <h4>事件绑定</h4>
    <g-input value="事件" @change="inputChange"></g-input>
    <g-input v-model="message"></g-input><span>{{message}}</span>
  </div>
</template>

<script>
export default {
  name: 'page-input',
  data() {
    return {
      message: 'v-model'
    }
  },
  methods: {
    inputChange(e) {
      console.log('inputChange', e)
    }
  }
}
</script>
