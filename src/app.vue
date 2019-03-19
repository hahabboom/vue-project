router-link<template>
	<div>
		<!-- 头部 -->
		<mt-header title="信息管理系统"></mt-header>


		<router-view></router-view>

		<!-- 底部 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" :to="{name:'home'}">
				<span class="mui-icon icon-shouye1"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'member'}">
				<span class="mui-icon icon-huiyuan"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'cart'}">
			<span class="mui-icon icon-cart1">
				  <!-- <span class="mui-badge">9</span> --></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'search'}">
				<span class="mui-icon icon-chazhao1"></span>
				<span class="mui-tab-label">查找</span>
			</router-link>
		</nav>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				
			}
		},
		created(){
			this.$ajax.get('')
			.then(res=>{
				console.log(res)
			})
			}
	}
</script>

<style>
	
</style>