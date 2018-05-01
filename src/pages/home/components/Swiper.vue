<template>
  <div class="swiper">
    <swiper :options="swiperOption" v-if="showSwiper">
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
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          bulletActiveClass: 'swiper-bullet-active'
        },
        loop: true,
        autoplay: {
          disableOnInteraction: false
        }
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length > 0
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
