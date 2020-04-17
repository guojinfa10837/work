<template>
  <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-Icons></home-Icons>
  </div>
</template>
<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name:'Home',
  components:{HomeHeader,HomeSwiper,HomeIcons}
}
</script>
<style>

</style>