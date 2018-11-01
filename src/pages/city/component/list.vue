<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              {{this.currentCity}}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item in hot"
            :key="item.id"
            @click="handleCityClick(item.name)">
            <div class="button">
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, key) in cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="innerItem in item"
               :key="innerItem.id"
               @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'cityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    //  侦听器，监听父级传过来的兄弟组件数据
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]// 处理跳转位置
        this.scroll.scrollToElement(element)//scroll开始跳转
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    position: absolute
    overflow: hidden
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      padding-left: .2rem
      line-height: .54rem
      background: #eee
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.3%
      .button
        margin: .1rem
        padding: .1rem 0
        text-align: center
        border: .02rem solid #ccc
        border-radius: .06rem
    .item-list
      .item
        padding-left: .2rem
        line-height: .76rem
</style>
