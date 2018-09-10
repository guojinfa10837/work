<template>
	<el-menu>
      <el-menu-item index="webCome" @click="handleOpen('webCome')">欢迎您</el-menu-item>
	 
	<el-submenu index="0">
		<template slot="title">
			<span>表单</span>
		</template>
		<el-menu-item index="list" @click="handleOpen('list')">list</el-menu-item>
		
	</el-submenu>
	<el-submenu index="1">
		<template slot="title">
			<span>导航一</span>
		</template>
		<el-menu-item-group>
			<template slot="title">分组一</template>
			
			<el-menu-item index="3-2">选项2</el-menu-item>
		</el-menu-item-group>
	</el-submenu>
</el-menu>
</template>
<script type="text/javascript">
	export default {
		methods:{
			handleOpen(key){
				if(key){
					this.$router.replace(key);
				};
			},
			handleClose(key,path){
				
			}
		}
	}
</script>
<style type="text/css" scoped>
	.el-aside{
		line-height: inherit;
	}

</style>