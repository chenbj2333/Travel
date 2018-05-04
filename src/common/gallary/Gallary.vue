<template>
  <div class="container" @click="handleGallaryClk">
    <div class="wrapper">
      <swiper :options="swiperOption">
      <!-- slides -->
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="swiper-img" :src="item" alt="图片">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
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
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGallaryClk () {
      this.$emit('gallaryClose')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background #000

    .wrapper
      width 100%
      height 0
      padding-bottom 100%

      .swiper-pagination
        color #fff
        bottom -1rem

      .swiper-img
        width 100%
</style>
