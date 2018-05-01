<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          bulletActiveClass: 'swiper-bullet-active'
        }
      },
      iconList: [
        {id: '001', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '景点门票'},
        {id: '002', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png', desc: '必游榜单'},
        {id: '003', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png', desc: '踏青赏花'},
        {id: '004', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png', desc: '一日游'},
        {id: '005', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png', desc: '动植物园'},
        {id: '006', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png', desc: '故宫'},
        {id: '007', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png', desc: '古北水镇'},
        {id: '008', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png', desc: 'Q+精选'},
        {id: '009', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png', desc: '自定义内容'}
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl';
  @import '~styles/varibles.styl';

  .icons >>> .swiper-bullet-active {
    background: $bgColor;
    opacity: .9;
  }
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 44%
    display: flex
    text-align: center

    .icon
      float: left
      width: 25%
      padding-bottom: 22%
      overflow: hidden
      position: relative

      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
        box-sizing: border-box
        padding: .16rem

        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%

      .icon-desc
        position: absolute
        right: 0
        left: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        ellipsis()
</style>
