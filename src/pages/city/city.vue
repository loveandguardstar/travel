<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCity"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import cityHeader from './component/header'
import citySearch from './component/search'
import cityList from './component/list'
import cityAlphabet from './component/alphabet'

export default {
  name: 'city',
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCity: []
    }
  },
  methods: {
    getCityInfo () {
      axios.get('api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      var _that = res.data
      this.cities = _that.data.cities
      this.hotCity = _that.data.hotCities
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
