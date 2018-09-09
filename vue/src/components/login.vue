<template>
	<el-container class="page" >
		<el-main>
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="账号">
					<el-input v-model="form.userName"></el-input>
				</el-form-item>
				<el-form-item label="账号">
					<el-input type="password" v-model="form.password"></el-input>
				</el-form-item>
				
				
				<el-form-item>
					<el-button type="primary" @click="onSubmit">登陆</el-button>
					
				</el-form-item>
			</el-form>
		</el-main>
	</el-container>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				form: {
					userName: '',
					password: ''
					
				}
			}
		},
		methods: {
			onSubmit() {
				//此处执行提交操作；
				if(this.form.userName && this.form.password){
					this.$router.push({ name: 'index',params:{userId:this.form.userName} });
				}else{
                   this.$message('请填写用户名以及秘密！');
				}
				
			}
		}
	}
</script>
<style type="text/css" scoped>
	.page{
 
  width: 100%;
  height: 100%;
}
  .el-header, .el-footer {
    color: #333;
    text-align: center;
   
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
  body > .el-container {
    
  }
</style>