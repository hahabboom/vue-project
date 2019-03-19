var mongoose =require('mongoose')
var Schema=mongoose.Schema

var newsSchema=new Schema({
	"id":String,
	"title":String,
	"addtime":Number,
	"zhaiyao":String,
	"click":Number,
	"img-url":String
})

module.exports=mongoose.model('news',newsSchema)