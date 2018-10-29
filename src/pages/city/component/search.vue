<template>
  <div>
    <div class="search">
      <input v-model="keyworld" class="search-input" type="text" placeholder="请输入城市名或拼音">
    </div>
    <div
      class="search-content"
      ref="search"
      v-show="keyworld">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item in list"
          :key="item.id">
          {{item.name}}
        </li>
        <li v-show="hasNoData" class="search-item border-bottom">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'citySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyworld: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyworld () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyworld) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyworld) > -1 ||
              value.name.indexOf(this.keyworld) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search
    padding: 0 .1rem
    height: .72rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      padding: 0 .3rem
      width: 100%
      height: .62rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>
