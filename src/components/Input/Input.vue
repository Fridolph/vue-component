<template>
  <div
    class="g-input-wrapper"
    :class="!!valid ? 'valid' : ''"
  >
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @blur="$emit('blur', $event)"
      @input="$emit('input', $event.target.value, $event)"
      @focus="$emit('focus', $event)"
      @change="$emit('change', $event)"
    />
    <template v-if="valid">
      <Icon :type="valid"></Icon>
      <span class="tips">{{ tips }}</span>
    </template>
  </div>
</template>

<script>
import Icon from "../Icon/Icon.vue";
export default {
  name: "g-input",
  components: { Icon },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    valid: {
      type: String,
      validator(value) {
        // 这个值必须匹配下列字符串中的一个
        return ["", "pass", "warn", "error"].includes(value);
      }
    },
    tips: {
      type: String
    }
  }
};
</script>

<style lang="stylus" scoped>
$height = 32px
$radius = 3px
$fontSize = 12px
$borderColor = #999
$borderColorHover = #666
$shadowColor = rgba(0,0,0,0.5)
$disableColor = #999
$disableBorderColor = #ccc

.g-input-wrapper
  font-size $fontSize
  display inline-block
  > input
    height $height
    border 1px solid $borderColor
    border-radius $radius
    padding 0 8px
    &:hover
      border-color $borderColorHover
    &:focus
      box-shadow inset 0 1px 3px $shadowColor
      outline none
    &[disabled]
      border-color $disableBorderColor
      color $disableColor
      cursor not-allowed

  &.error
    position relative

</style>
