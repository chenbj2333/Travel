<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {id: '0001', imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/49/7fd4ed94b22959fd680584185619bdae.water.jpg_200x200_aa11bcb6.jpg', title: '沈阳世博园', desc: '辽宁省沈阳市浑南区近郊高坎镇中马村双园路301号'},
        {id: '0002', imgUrl: 'http://img1.qunarzz.com/tuan/team2/1507/f6/1e52bc3a6de6d.jpg_200x200_e8d901d6.jpg', title: '沈阳方特欢乐世界', desc: '辽宁省沈阳市市沈北新区道义开发区盛京大街55号'},
        {id: '0003', imgUrl: 'http://img1.qunarzz.com/sight/p0/1706/23/238f540754b2bdd1a3.water.jpg_200x200_86c3c010.jpg', title: '七星海世界', desc: '辽宁省沈阳市沈北新区盛京大街53号'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl';

  .recommend-title
    margin-top .2rem
    line-height .8rem
    background #eeeeee
    text-indent .2rem
  
  .item
    overflow hidden
    display flex
    height 1.9rem

    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem

    .item-info
      flex 1
      padding .1rem
      min-width 0

    .item-title
      line-height .54rem
      font-size: .32rem
      ellipsis()

    .item-desc
      line-height .4rem
      color: #cccccc
      ellipsis()

    .item-btn
      line-height .44rem
      background #ff9300
      padding 0 .2rem
      border-border-radius .06rem
      margin-top .16rem
      color #fff
</style>
