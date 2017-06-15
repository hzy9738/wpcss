const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

const static = 'static';      //外部静态文件夹名

module.exports = {
  // 注：entry为数组，key为生成到static/css的css名字，值为css模板路径
  entry: {
    index:'./src/css/index.css'
  },
  output: {
    filename: '[name].css',
    path: __dirname + '/../'+static+'/css/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            }, {
              loader: 'postcss-loader'
            }
          ]
        })
      }, {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
       test: /\.(jpg|png|svg|ico|gif|JPEG)$/i,
       use: [{
         loader:'url-loader',
         query:{
           name:'./images/[name].[ext]'
         }
       }]
     },

    ]
  },
  plugins: [new ExtractTextPlugin({filename: '[name].css', disable: false, allChunks: false})]
}
