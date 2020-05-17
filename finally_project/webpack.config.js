const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: __dirname + "/src/js/script.js",
    output: {
        path: __dirname + '/dist', 
        filename: 'main.js',  
        publicPath: '/' 
    },
    module: {  
        rules: [
            {
                test: /\.js/,
                exclude: [
                    /node_modules/,
                    /index.js/
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.(css)$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }]
            } 
        ]
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }), 
        new HtmlWebpackPlugin({
            template: __dirname + "/src/public/index.html"
        }),
        new CopyWebpackPlugin( {
            patterns: [
            { from: __dirname + '/src/public/images', to: 'images' },
            { from: __dirname + '/src/styles', to: 'styles' }
            ]
        })      
    ],
    devServer: {
        contentBase: './dist',
        open: true
    } 
};