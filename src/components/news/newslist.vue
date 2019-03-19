<template>
    <div class="tpml">

        <navBar title="新闻列表"></navBar>
        <ul class="mui-table-view">
            <li v-for="item in list" :key="item.id" class="mui-table-view-cell mui-media">
                    <router-link :to="{name:'news.detail',query:{id:item.id}}">
                    <img class="mui-media-object mui-pull-left" src="news.img_url">
                    <div  class="mui-media-body">
                        <span v-text="item.title"></span>
                        <div class="news-desc">
                            <p>点击数：{{item.click}}</p>
                            <p>时间：{{item.time}}</p>
                        </div>
                    </div>
                    </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[]
        }
    },created(){
        var url='/news'
        this.$ajax.get(url)
        .then(res=>{
            console.log(res.data)
            this.list=res.data
        })
        .catch(res=>{
            console.log(err)
        })
    }
}

</script>
<style scoped>
.mui-media-body p {
    color: #0bb0f5;
}

.news-desc p:nth-child(1) {
    float: left;
}

.news-desc p:nth-child(2) {
    float: right;
}

li{
    height:80px;
}
</style>
