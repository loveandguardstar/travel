<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import detailBanner from './components/banner'
import detailHeader from './components/header'

export default {
  name: 'detail',
  components: {
    detailBanner,
    detailHeader
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
    background: #25a4bb
</style>
