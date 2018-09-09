<template>
  <el-container  class="layout">
    <el-header>
      <v-head></v-head>
    </el-header>
    <el-container>
      <el-aside width="200px">
          <v-aside></v-aside>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import vHead from "./common/head";
import vAside from "./common/side";
import vFoot from "./common/foot";
export default {
  name: 'layout',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
   
  },
  components:{
    'v-head':vHead,
    'v-aside':vAside,
    'v-foot':vFoot
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.layout{
 
  width: 100%;
  height: 100%;
}
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    
  }
  
  .el-main {
    color: #333;
    text-align: center;
    
    padding: 10px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
 

</style>
