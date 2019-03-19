var express=require('express')
var router=express.Router()
var mongoose=require('mongoose')
var News=require('../models/news.js')
var News=mongoose.model('news',newsSchema)

mongoose.connect('mongodb://127.0.0.1:27017/dbmall')

mongoose.connection.on("connected",function(){
	console.log("MongoDB connected success")
})

mongoose.connection.on("error",function(){
	console.log("MongoDB connected fail")
})

mongoose.connection.on("disconnected",function(){
	console.log("MongoDB connected disconnected")
})

router.get("/",function(req,res,next){
	goods.find({},function(err,doc){
		if(err){
			res.json({
				status:'1',
				msg:err.message
			})
		}
			else{
				res.json({
					status:'0',
					msg:'',
					result:{
						count:doc.length,
						list:doc
					}
				})
			}
	})
})

News.findById(req.query.id,function(err,ret){
	if(err){
		console.log('error')

	console.log(ret)
	}
})
module.exports=router