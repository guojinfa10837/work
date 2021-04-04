const path = require('path');
const webpack = require( 'webpack' );
const CleanWebpackPlugin = require( "clean-webpack-plugin" );       // 清理过期文件
const MinCssExtractPlugin = require( "mini-css-extract-plugin" );   // 将css代码提取为独立文件的插件
const OptimizeCssAssetsWebpackPlugin = require( "optimize-css-assets-webpack-plugin" );     // css模块资源优化插件
//参考：https://cloud.tencent.com/developer/article/1495248

const utils = require('./webpack.utils');
const {entry,HtmlWebpackPluginQue} = utils;
const config = {
   entry,
   plugins:[
     new CleanWebpackPlugin(['dist'],{
       root:path.resolve(__dirname,'../')
     }),
     new MinCssExtractPlugin({
      filename(file){
        return "assets/[name].css"
      }
     }),
     ...HtmlWebpackPluginQue
   ],

   output:{
   	 filename: '[name].bundle.js',
     path:path.resolve(__dirname,'../dist')
   },
  
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader'
          },
          exclude: '/node_modules/'
        },
        {
          test: /\.(jpg|png|svg|gif)/,
          use: [
              // {
              //     // webpack通过file-loader处理资源文件，它会将rules规则命中的资源文件按照配置的信息（路径，名称等）输出到指定目录，并返回其资源定位地址（输出路径，用于生产环境的publicPath路径），默认的输出名是以原文件内容计算的MD5 Hash命名的
              //     loader: "file-loader",
              //     options: {
              //         outputPath: "images/"
              //     }
              // },
              {
                  // 构建工具通过url-loader来优化项目中对于资源的引用路径，并设定大小限制，当资源的体积小于limit时将其直接进行Base64转换后嵌入引用文件，体积大于limit时可通过fallback参数指定的loader进行处理。
                  // 打包后可以看到小于8k的资源被直接内嵌进了CSS文件而没有生成独立的资源文件
                  loader:'url-loader',
                  options:{
                    limit:8129,//小于limit限制的图片将转为base64嵌入引用位置
                    fallback:'file-loader',//大于limit限制的将转交给指定的loader处理，开启这里后就无需再单独配置file-loader
                    outputPath:'assets/images/',//options会直接传给fallback指定的loader
                    publicPath:'./images/'

                  }
              }
          ]
        },
        {
          test: /\.css$/,
          include: [path.resolve(__dirname, '../src')],   // 限制打包范围，提高打包速度
          exclude: /node_modules/,                     // 排除node_modules文件夹
          use: [
            MinCssExtractPlugin.loader,  // 将处理后的CSS代码提取为独立的CSS文件，可以只在生产环境中配置，但我喜欢保持开发环境与生产环境尽量一致
            "css-loader"    // CSS加载器，使webpack可以识别css文件
          ]
        },
        {
          test: /\.scss$/,
          include: [path.resolve(__dirname, '../src')],   // 限制打包范围，提高打包速度
          exclude: /node_modules/,                     // 排除node_modules文件夹
          use: [
            MinCssExtractPlugin.loader,  // 将处理后的CSS代码提取为独立的CSS文件，可以只在生产环境中配置，但我喜欢保持开发环境与生产环境尽量一致
            "css-loader", // CSS加载器，使webpack可以识别css文件
              {
                  loader: "sass-loader",       // 编译sass，webpack默认使用node-sass进行编译，所以需要同时安装 sass-loader 和 node-sass
                  options: {      // loader 的额外参数，配置视具体 loader 而定
                      sourceMap: true, // 要安装resolve-url-loader，当此配置项启用 sourceMap 才能正确加载 Sass 里的相对路径资源，类似background: url(../image/test.png)
                      
                  }
              }
          ]
        },
      ]
    },
    // 提取公共模块，包括第三方库和自定义工具库等
    optimization: {
      // 找到chunk中共享的模块,取出来生成单独的chunk
      splitChunks: {
          chunks: "all",      // async表示抽取异步模块，all表示对所有模块生效，initial表示对同步模块生效
          cacheGroups: {
              vendors: {  // 抽离第三方插件
                  test: /[\\/]node_modules[\\/]/,     // 指定是node_modules下的第三方包
                  name: "vendors",
                  priority: -10       // 抽取优先级
              },
              commons: {      // 抽离自定义工具库
                  name: "common",
                  priority: -20,      // 将引用模块分离成新代码文件的最小体积
                  minChunks: 2,       // 表示将引用模块如不同文件引用了多少次，才能分离生成新chunk
                  minSize: 0
              }
          }
      },
      // 对生成的CSS文件进行代码压缩 mode='production'时生效
      minimizer: [
        new OptimizeCssAssetsWebpackPlugin()
      ]
    }, 
    // 配置webpack执行相关
    performance: {
      maxEntrypointSize: 1000000, // 最大入口文件大小1M
      maxAssetSize: 1000000       // 最大资源文件大小1M
    }
};

module.exports = config