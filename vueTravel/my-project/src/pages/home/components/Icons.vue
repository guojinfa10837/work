<template>
  <div class="icons">
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for ="(page,inx) of pages" :key="inx">
            <div class="icon"
              v-for="item of page"
              :key="item.id"
              >
                <div class="icon-img">
                    <img  class="icon-cont-img" :src="item.imgSrc"/>
                </div>
                <p class="icon-desc">{{item.desc}}</p>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>    
  </div>
</template>
<script>
export default {
  name:'HomeIcons',
  data () {
    return {
        swiperOptions: {
          pagination:'.swiper-pagination'
          // Some Swiper option/callback...
        },
        iconList:[{
            id:'001',
            imgSrc:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
            desc:"热门景点"
        },{
            id:'02',
            imgSrc:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
            desc:"颐和园"
        },{
            id:'03',
            imgSrc:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
            desc:"颐和园"
        },{
            id:'04',
            imgSrc:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
            desc:"颐和园"
        },{
            id:'05',
            imgSrc:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
            desc:"颐和园"
        },{
            id:'06',
            imgSrc:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
            desc:"颐和园"
        },{
            id:'07',
            imgSrc:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
            desc:"颐和园"
        },{
            id:'08',
            imgSrc:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
            desc:"颐和园"
        },{
            id:'09',
            imgSrc:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
            desc:"颐和园"
        },{
            id:'10',
            imgSrc:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
            desc:"颐和园"
        }]
      }
  },
  computed:{
      pages () {
          const pages= [];
          this.iconList.forEach((item,inx) =>{
              const page = Math.floor(inx/8);
              if(!pages[page]){
                  pages[page] = [];
              }
              pages[page].push(item);
              
          });
          return pages;
      }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.icons>>> .swiper-container
    height:0;
    padding-bottom:59%;
    overflow:hidden;
.icon
    float:left;
    width:25%;
    height:0;
    padding-bottom:25%;
    position:relative;
    .icon-img 
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:.44rem;
        box-size:border-box;
        .icon-cont-img
            height:100%;
            display:block;
            margin:0 auto;
    .icon-desc
        font-size:14px;   
        position:absolute;
        bottom:0;
        right:0;
        left:0;
        color:$fontColor;     
        line-height:.44rem;
        text-align:center;

</style>