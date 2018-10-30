<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <!-- slides -->
        <swiper-slide
          v-for="(item, index) in imgs"
          :key="index"
        >
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close') // 组件传值
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 2
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #666
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #ffffff
        bottom: -1rem
</style>
