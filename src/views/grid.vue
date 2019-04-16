<template>
  <div>
    <h3>Grid - 栅格系统</h3>
    <g-row>
      <g-col span="12"><div>1</div></g-col>
      <g-col span="12"><div>2</div></g-col>
    </g-row>
    <br>
    <g-row>
      <g-col span="4"><div>1</div></g-col>
      <g-col span="16"><div>2</div></g-col>
      <g-col span="4"><div>3</div></g-col>
    </g-row>
    <br>
    <g-row>
      <g-col span="1"><div>1</div></g-col>
      <g-col span="8" offset="3"><div>2</div></g-col>
      <g-col span="3" offset="2"><div>3</div></g-col>
      <g-col span="3" offset="4"><div>4</div></g-col>
    </g-row>
    <br>
    <g-row :gutter="16">
      <g-col span="6"><div>1</div></g-col>
      <g-col span="6"><div>2</div></g-col>
      <g-col span="6"><div>3</div></g-col>
      <g-col span="6"><div>4</div></g-col>
    </g-row>
    <br>
    <g-row :gutter="32">
      <g-col span="4"><div>1</div></g-col>
      <g-col span="4"><div>2</div></g-col>
      <g-col span="4"><div>3</div></g-col>
      <g-col span="4"><div>4</div></g-col>
      <g-col span="4"><div>5</div></g-col>
      <g-col span="4"><div>6</div></g-col>
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
.g-col
  > div
    background-color skyblue
  &:nth-child(2n+1)
    > div
      background-color #27a966
</style>
