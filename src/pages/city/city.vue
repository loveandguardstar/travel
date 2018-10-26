<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import cityHeader from './component/header'
import citySearch from './component/search'

export default {
  name: 'city',
  components: {
    cityHeader,
    citySearch
  }
}
</script>

<style lang="stylus" scoped>

</style>
