<template>
  <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-Icons></home-Icons>
      <home-Recommend></home-Recommend>
  </div>
</template>
<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
export default {
  name:'Home',
  components:{HomeHeader,HomeSwiper,HomeIcons,HomeRecommend}
}
</script>
<style>

</style>