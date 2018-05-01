<template>
  <div class="recommend">
    <div class="recommend-title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
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
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl';

  .recommend-title
    margin-top .1rem
    line-height .8rem
    background #eeeeee
    text-indent .2rem

  .item-img-wrapper
    height 0
    overflow hidden
    padding-bottom 37.09%

    .item-img
      width 100%

  .item-info
    padding: .14rem .2rem .2rem .2rem;

  .item-title
    color: #212121;
    font-size: .28rem;
    line-height: .48rem;
    ellipsis()

  .item-desc
    line-height .4rem
    color: #616161;
    font-size: .24rem;
    ellipsis()
</style>
