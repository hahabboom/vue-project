'use strict'

import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

import './staic/vendor/mui/dist/css/mui.css'
import "./staic/css/global.css"

import Axios from 'axios'
Vue.prototype.$ajax=Axios
Axios.defaults.baseURL='http://localhost:3000/'

import Moment from 'moment'

import NavBar from './components/common/navbar.vue'

Vue.filter('convertDate',function(value){
	return Moment(value).format('YYYY-MM-DD')
})

Vue.component('navBar',NavBar)

import App from './app.vue'
import Home from './components/home/home.vue'
import Member from './components/member/member.vue'
import Cart from './components/cart/cart.vue'
import Search from './components/search/search.vue'
import NewsList from './components/news/newslist.vue'
import NewsDetail from './components/news/newsdetail.vue';
import PhotoShare from './components/photo/photo.vue'

let router=new VueRouter({
	linkActiveClass:'mui-active',
	routes:[
	{path:'/',redirect:{name:'home'}},
	{name:'home',path:'/home',component:Home},
	{name:'member',path:'/member',component:Member},
	{name:'cart',path:'/cart',component:Cart},
	{name:'search',path:'/search',component:Search},
	{name:'news.list',path:'/news/list',component:NewsList},
	{name:'news.detail',path:'/news/detail',component:NewsDetail},
	{name:'photo.share',path:'/photo/share',component:PhotoShare}, 
	]
}) 


new Vue({
	el:'#app',
	router,
	render:c=>c(App)
})
