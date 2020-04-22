<template>
  <div class="ReCommendWrap">
       <div class ="recommend-title">热销推荐</div>
       <div class="recommend-list border-bottom">
         <div class="item" v-for="item of recommendList" :key="item.id">
          <div class="imgWrap">
            <img :src="item.src"/>
          </div>
          <div class="dicwrap">
          <p class="wrapinfotitle">{{item.title}}</p>
          <p class="wrapinfodesc">{{item.des}}</p>
          <button class="item-button">查看详情</button>
          </div>
         </div>
        
       </div>
       
  </div>
</template>
<script>
export default {
  name:'HomeRecommend',
  data () {
    return {
       recommendList:[{
         id:'001',
         src:'',
         title:'大连圣亚海洋世界',
         des:'宾不知道有啥好玩的'
       },{
         id:'002',
         src:'',
         title:'大连圣亚海洋世界',
         des:'宾不知道有啥好玩的'
       }]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.ReCommendWrap
  background:#eee;
  clear:botn;
.recommend-title
  line-height :0.8rem;
  margin-top:.2rem;
  background:#eee;
  text-align:left;
  text-indent:.2rem;
  font-size:0.4rem;
  
.recommend-list
.item
  width:100%;
  margin-bottom:.2rem;
  background:#fff;
  clear both
  overflow:hidden
  .imgWrap
    float left
    width:2.5rem;
    img 
      height 100px;
      width:100px;
  .dicwrap
    float left
    .wrapinfotitle
      font-size:.4rem;
    .wrapinfodesc
      font-size:.3rem;
      color:#333;
    .item-button
      font-size:.3rem;
      padding:.3 .5rem;
      border:1px solid #333;
      border-radius:.1rem;  
      background:#fff;
</style>