<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back">&#xe624;</div>
    </div>
    <div class="header-input"><span class="iconfont searchIcon">&#xe632;</span>输入城市/景点/游玩</div>
    <div class="header-right">城市 <span class="iconfont">&#xe6aa;</span></div>
  </div>
</template>
<script>
export default {
  name:'HomeHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
    display:flex;
    height:.86rem;
    background:$bgColor;
    line-height:.86rem;
    font-size:0.20rem;
    color:#fff;
    .header-left
        width:.64rem;
        float:left;
        text-align:center;
        .back
            text-align:center;
            font-size:.4rem;
    .header-right
        width:1.24rem;
        float:right;
        text-align:center;
       
    .header-input
        flex:1;
        background:#fff;
        border-radius:.1rem;
        margin-top:.12rem;
        height:.64rem;
        margin-left:.2rem;
        color:#cccc;
        line-height.64rem;
        .searchIcon
            margin:.1rem;
</style>