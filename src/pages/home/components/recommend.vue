<template>
  <div>
    <div class="title">
      热销推荐
    </div>
    <ul>
      <li class="item border-bottom"
          v-for="item in recommendList"
          :key="item.id">
          <img class="item-img" :src="item.imgUrl"/>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/f5/f575b0f463058f96a3.img.jpg_200x200_e772e5ef.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园浪漫大连首站，浪漫的海洋主题乐园浪漫大连首站，浪漫的海洋主题乐园浪漫大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/f5/f575b0f463058f96a3.img.jpg_200x200_e772e5ef.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园浪漫大连首站，浪漫的海洋主题乐园浪漫大连首站，浪漫的海洋主题乐园浪漫大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/f5/f575b0f463058f96a3.img.jpg_200x200_e772e5ef.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园浪漫大连首站，浪漫的海洋主题乐园浪漫大连首站，浪漫的海洋主题乐园浪漫大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/f5/f575b0f463058f96a3.img.jpg_200x200_e772e5ef.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园浪漫大连首站，浪漫的海洋主题乐园浪漫大连首站，浪漫的海洋主题乐园浪漫大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '005',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/f5/f575b0f463058f96a3.img.jpg_200x200_e772e5ef.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园浪漫大连首站，浪漫的海洋主题乐园浪漫大连首站，浪漫的海洋主题乐园浪漫大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '006',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/f5/f575b0f463058f96a3.img.jpg_200x200_e772e5ef.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园浪漫大连首站，浪漫的海洋主题乐园浪漫大连首站，浪漫的海洋主题乐园浪漫大连首站，浪漫的海洋主题乐园'
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
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
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
      .item-button
        line-height: .44rem
        margin-top: .2rem
        background: #ff9300
        padding: 0 .16rem
        -webkit-border-radius: .06rem
        -moz-border-radius: .06rem
        border-radius: .06rem
        color: #fff
</style>
