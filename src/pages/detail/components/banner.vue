<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1710/f5/f575b0f463058f96a3.img.jpg_600x330_b4ab7f0d.jpg"/>
      <div class="banner-info">
        <div class="banner-title">宁乡炭河古城</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe620;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    >
    </common-gallary>
  </div>
</template>

<script>
import commonGallary from '@/common/gallary/gallary'
export default {
  name: 'banner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1803/da/da1144db30340337a3.water.jpg_r_800x800_4a1e42de.jpg', 'http://img1.qunarzz.com/sight/p0/1803/23/23bf3f330ddb399ca3.water.jpg_r_800x800_0f799919.jpg']
    }
  },
  components: {
    commonGallary
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        padding: 0 .4rem
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        border-radius: .24rem
        background: rgba(0, 0, 0, .8)
        .banner-icon
          font-size: .24rem
</style>
