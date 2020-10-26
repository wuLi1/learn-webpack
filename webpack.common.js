//公共配置文件

const webpack = require('webpack');  // 这个插件不需要安装，是基于webpack的，需要引入webpack模块
const path = require("path");
const HtmlWebpackagePlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        index:path.join(__dirname, "/src/index.js"),  // 入口文件
        two: path.join(__dirname, "/src/two.js")
    },
    output: {
        path: path.join(__dirname, "/dist"),//打包后的文件存放的地方
        filename: "[name].js",  //打包输出文件
        publicPath: '../',
    },
    mode: 'development', // 设置mode
    module: {
        rules: [
            {
                test: /\.css$/,   // 正则匹配以.css结尾的文件
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
             
            },
            {
                test: /\.(scss|sass)$/,   // 正则匹配以.scss和.sass结尾的文件
                use: ['style-loader', 'css-loader', 'sass-loader'],  // 需要用的loader，一定是这个顺序，因为调用loader是从右往左编译的
            },
            {
                test: /\.(png|jpg|svg|gif)$/,// 正则匹配图片格式名
                use: [
                    {
                        loader: "url-loader", // 使用url-loader
                     //   loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
                        // name 字段指定了在打包根目录（output.path）下生成名为 images 的文件夹，并在原图片名前加上8位 hash 值。
                        options: {
                            limit: 1000,// 限制只有小于1kb的图片才转为base64，例子图片为1.47kb,所以不会被转化
                            outputPath: 'images',  // 设置打包后图片存放的文件夹名称
                        }
                        
                    }
                ]
            },

            {  // jsx配置
                test: /(\.jsx|\.js)$/,
                use: {                  // 注意use选择如果有多项配置，可写成这种对象形式
                    loader: "babel-loader"

                },
                exclude: /node_modules/  //排除匹配node_modules模块
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),  // new一个插件的实例 
        new HtmlWebpackagePlugin({
            template: path.join(__dirname, "src/index.template.html")
            //  new一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(), // 热更新插件 
        new MiniCssExtractPlugin()
    ]
}
// 有了这个配置文件，我们只需在终端中运行webpack命令就可进行打包，
// 这条命令会自动引用webpack.config.js文件中的配置选项
//没有这个文件，运行webpack命令会默认生成dist-main.js