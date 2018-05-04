<template>
  <div>
    <detail-banner
      :gallaryImgs="gallaryImgs"
      :bannerImg="bannerImg"
      :sightName="sightName">
    </detail-banner>
    <detail-header></detail-header>
    <detail-list :categoryList="categoryList"></detail-list>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      gallaryImgs: [],
      bannerImg: '',
      sightName: '',
      categoryList: [],
      detailId: ''
    }
  },
  methods: {
    getDetailData () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then((res) => {
        res = res.data
        if (res.ret && res.data) {
          this.gallaryImgs = res.data.gallaryImgs
          this.bannerImg = res.data.bannerImg
          this.sightName = res.data.sightName
          this.categoryList = res.data.categoryList
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
