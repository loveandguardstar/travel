<template>
  <div>
    <transition>
      <slot></slot>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'fade'
}
</script>

<style lang="stylus" scoped>
  .v-enter, .v-leave-to
    opacity: 0
  .v-enter-active, .v-leave-active
    transition: opacity .5s
</style>
