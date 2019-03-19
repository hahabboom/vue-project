<template>
	<div>
		<!-- 轮播图 -->
<mt-swipe :auto="4000">
  		<mt-swipe-item><a href=""><img src="../../staic/img/shouye1.jpg" alt=""></a></mt-swipe-item>
  		<mt-swipe-item><a href=""><img src="../../staic/img/shouye2.jpg" alt=""></a></mt-swipe-item>
  		<mt-swipe-item><a href=""><img src="../../staic/img/shouye3.jpg" alt=""></a></mt-swipe-item>
</mt-swipe>
<!-- 九宫格 -->
<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            <router-link :to="{name:'news.list'}">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name:'photo.share'}">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图文分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品展示</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">搜索咨询</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
		</div>
</div>
</template>
<script>
	export default{
		data(){
			return {
					}
				}
	}
</script>

<style scoped>
div{
	height:230px;
}
.mint-swipe-items-wrap img{
	height:100%;
	width:100%;
}	

.mui-table-view.mui-grid-view.mui-grid-9{
	background-color:white;
	margin-top:0;
	border:0;
}

.mui-table-view.mui-grid-view.mui-grid-9 li{
	border:0;
}



.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before{
    content: '';
}
.mui-icon-home{
	background-image:url(../../staic/img/news.png);
    background-repeat: round;
}
.mui-icon-email{
    background-image: url('../../staic/img/picShare.png');
    background-repeat: round;
}
.mui-icon-chatbubble{
    background-image: url('../../staic/img/goodShow.png');
    background-repeat: round;
}
.mui-icon-location{
    background-image: url('../../staic/img/feedback.png');
    background-repeat: round;
}
.mui-icon-search{
    background-image: url('../../staic/img/search.png');
    background-repeat: round;
}
.mui-icon-phone{
    background-image: url('../../staic/img/callme.png');
    background-repeat: round;
}
.mui-icon{
	height:50px;
	width:50px;
}
</style>