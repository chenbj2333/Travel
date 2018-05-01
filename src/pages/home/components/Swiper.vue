<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="轮播图片">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          bulletActiveClass: 'swiper-bullet-active'
        },
        loop: true,
        autoplay: true
      },
      swiperList: [
        {id: '0001', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/15/9250dbc86a456302.jpg_640x200_4c7220d4.jpg'},
        {id: '0002', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/5c/969bfa7af00a2702.jpg_640x200_e1b76963.jpg'},
        {id: '0003', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/1b/6c766b79e2045102.jpg_640x200_3e44c74a.jpg'}
      ]
    }
  }
}
</script>

<style scoped>
  .swiper >>> .swiper-bullet-active {
    background: #fff;
    opacity: .9;
  }
  .swiper {
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 31.25%;
  }
  .swiper-img {
    width: 100%;
  }
</style>
