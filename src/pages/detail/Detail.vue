<template>
  <div>
    <detail-banner
      :gallaryImgs="gallaryImgs"
      :bannerImg="bannerImg"
      :sightName="sightName">
    </detail-banner>
    <detail-header></detail-header>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  },
  data () {
    return {
      gallaryImgs: [],
      bannerImg: '',
      sightName: ''
    }
  },
  methods: {
    getDetailData () {
      axios.get('/api/detail.json').then((res) => {
        res = res.data
        if (res.ret && res.data) {
          this.gallaryImgs = res.data.gallaryImgs
          this.bannerImg = res.data.bannerImg
          this.sightName = res.data.sightName
        }
      })
    }
  },
  mounted () {
    this.getDetailData()
  }
}
</script>

<style lang="stylus" scoped>
</style>
