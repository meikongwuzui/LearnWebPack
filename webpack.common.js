const path=require('path');
const ExtractTextPlugin=require("extract-text-webpack-plugin");
const HtmlWebpackPlugin=require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports={
    entry:{
        index:'./src/index.js',
    },
    output:{
        filename:'[name].[chunkhash].js',
        chunkFilename:'[name].[chunkhash].js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                   fallback: 'style-loader',
                   use: 'css-loader'
                })
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({title:'首页'})
    ]
};