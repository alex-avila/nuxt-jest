<template>
  <button
    :class="withoutStyle ? 'has-no-style' : 'button is-primary'"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    withoutStyle: {
      type: Boolean,
      default: false
    }
  }
}
</script>


<style lang="sass" scoped>
.has-no-style
  color: inherit
  background: none
  border: none
  font: inherit
  cursor: inherit
</style>
