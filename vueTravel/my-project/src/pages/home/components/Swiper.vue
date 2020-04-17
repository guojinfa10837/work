<template>
   <div class="wrap">
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
        <img class="bannerImg" src="//img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_600x330_75d1925c.jpg">
        </swiper-slide>
        <swiper-slide> 
        <img class="bannerImg" src="//img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_600x330_75d1925c.jpg"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name:'HomeSwiper',
  data () {
    return {
        swiperOptions: {
          pagination:'.swiper-pagination'
          // Some Swiper option/callback...
        }
      }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.wrap
    overflow:height;
    width:100%;
    height:0;
    padding-bottom:36.25%;
    .bannerImg
        width:100%;
        height:3rem;

</style>