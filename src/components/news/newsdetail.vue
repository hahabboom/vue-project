<template>
    <div class="tmpl">
        <nav-bar title="新闻详情"></nav-bar>
        <div class="news-title">
            <p v-text="newsDetail.title"></p>
            <div>
                <span>{{newsDetail.pid}}次点击</span>
                <span>分类:{{newsDetail.author}}</span>
                <span>添加时间:{{newsDetail.appEtime | convertDate}}</span>
            </div>
        </div>
        <div class="news-content" v-html="newsDetail.intro"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            newsDetail:{}, 
        }
    },created(){
        var url='/api' 
           var id = this.$route.query.id;
           console.log(id)
           this.$ajax.get(url)
           .then(
            res=>{
             //3:响应回来渲染页面
             this.newsDetail = res.data.data[0]
             console.log(newsDetail)
            }
        )
        .catch(err=>{
          console.log(err);
        })
       
    }
}

</script>

<style scoped>
.news-title p {
    color: #0a87f8;
    font-size: 20px;
    font-weight: bold;
}

.news-title span {
    margin-right: 30px;
}

.news-title {
    margin-top: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}


/*主体文章的左右距离*/

.news-content {
    padding: 10 5;
}
</style>
