<template>
	<el-container class="page" >
		<el-header height="172px">
			<!-- <router-link to="/listReluter">123</router-link> -->
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="活动名称">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				
				<el-form-item label="活动时间">
					<el-col :span="11">
						<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
					</el-col>
					<el-col class="line" :span="2">-</el-col>
					<el-col :span="11">
						<el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
					</el-col>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">检索</el-button>
					<el-button>重置</el-button>
				</el-form-item>
			</el-form>
			
		</el-header>
		<el-main >
			<router-view tag="div" :name123="form"></router-view>
		</el-main>
	</el-container>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				form: {
					name: '123',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		methods: {
			onSubmit() {
				//此处执行提交操作；
				this.$router.push('/listReluter');
				//this.$router.push({name:'/listReluter',query:this.form});
				/*this.$router.push({ name: 'index',params:{userId:this.form.userName} });*/
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