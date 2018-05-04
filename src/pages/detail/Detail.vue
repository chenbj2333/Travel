<template>
  <div>
    <detail-banner
      :gallaryImgs="gallaryImgs"
      :bannerImg="bannerImg"
      :sightName="sightName">
    </detail-banner>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner
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
