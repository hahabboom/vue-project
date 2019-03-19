'use strict'
const path=require('path')
const htmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports={
	entry:{
		main:'./src/main.js'
	},
	output:{
		path:path.join(__dirname,'dist'),
		filename:'build.js'
	},
	module:{
		rules:[
			{test:/\.css$/,
			use:['style-loader','css-loader']
			},
			{test:/\.less$/,
			use:['style-loader','css-loader','autoprefixer-loader','less-loader']
			},
			{test:/\.(jpg|svg|png|gif|ttf|woff|woff2)$/,
			use:[{
				loader:'url-loader',
				options:{
					limit:4096,
					name:'[name].[ext]'
				}
				}
			]
			},
			{test:/\.js$/,
			exclude: /(node_modules|bower_components)/,
			use:[{
				loader:'babel-loader',
				options:{
				babelrc: false,
				presets:['es2015'],
				plugins:['transform-runtime'],
				}
			}]
			},
			{test:/\.vue$/,
			use:'vue-loader',
			},
		]
	},
	plugins:[
			new htmlWebpackPlugin({
				template:'./src/index.html'
			}),
			new VueLoaderPlugin()
		]
	
	}
