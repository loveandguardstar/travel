<template>
  <div>
    <div class="title">
      周末去哪儿
    </div>
    <ul>
      <li class="item border-bottom"
          v-for="item in recommendList"
          :key="item.id">
        <div class="img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1509/3a/e163a8e32517d9.jpg_r_640x214_4fd882d3.jpg',
          title: '边城秋色',
          desc: '不得不看的边城秋日之美'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/fb/302620ed8350f8.jpg_r_640x214_25a07cb4.jpg',
          title: '长沙必游top10',
          desc: '到了长沙，一定要到这些地方走走'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ae/11f076c6cb7c47.jpg_r_640x214_6f643489.jpg',
          title: '张家界必游top10',
          desc: '到张家界最值得游玩的地方'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1603/56/33894ef918e1a8.jpg_r_640x214_a9de6b4e.jpg',
          title: '湘西必游top10',
          desc: '神奇山水风光，浓郁民俗风情'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .title
    margin-top: .2rem
    line-height: .8rem
    text-indent: .2rem
    background: #cacaca
  .img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.5%
    .item-img
     width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
    .item-desc
      line-height: .4rem
      color: #ccc
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
</style>
