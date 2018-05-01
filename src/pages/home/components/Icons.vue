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
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          bulletActiveClass: 'swiper-bullet-active'
        },
        autoplay: false
      }
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
  .icons >>> .swiper-pagination-bullets {
    bottom: 0
  }
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 49%
    display: flex
    text-align: center
  .icons
    margin-top: .04rem
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
