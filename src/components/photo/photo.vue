<template>
	<div>
		{{newsList.id}}
		<img :src="newsList.url" alt="">
	</div>
</template>
<script>
	export default{
		data(){
			return {
				newsList:{}
			}
		},created(){
			this.$ajax.get('goods')
        .then(res=>{
            console.log(res.data)
            this.newsList=res.data[0]
        })
       .catch(err=>{
            console.log(err);
        })
		}
	}
</script>
<style>
	
</style>