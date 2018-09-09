<template>

	<el-row>
		<el-col :span="6">
			<img src=""><span>element-ui</span>
		</el-col>
		<el-col :span="6" :offset="12">
			<el-dropdown>
				<span>
					{{userName}} <i class="el-icon-caret-bottom el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item class="clearfix">
						<router-link to="/login">
							退出
						</router-link>
					</el-dropdown-item>

				</el-dropdown-menu>
			</el-dropdown>
		</el-col>
	</el-row>


</template>
<script type="text/javascript">
export default {
	data(){
		return {
			userName:"admin"
		}
	},
	mounted(){
		this.setUserName();
	},
	methods:{
		setUserName(){
 			(this.$route.params.userId) && (this.userName = this.$route.params.userId);
		}
	}

}
</script>
<style type="text/css" scoped>
	
</style>
