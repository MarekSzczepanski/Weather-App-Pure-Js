const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: {
       index: './src/index.js',
       app: './src/app.js'
    },
    output: {
        filename: 'js/[name]-[contenthash:6].js',
        path: path.resolve(__dirname, '../', 'dist')
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(scss|sass)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|svg|gif|jpeg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name:'[name][contenthash:6].[ext]',
                        outputPath: 'images',
                        publicPath: '../images',
                    }
                }, {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            quality: 70,
                            progressive: true,
                        }
                    },
                }]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "src/template.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[contenthash:6].css'
        }),
        new CopyPlugin(
            [
                {
                    from: 'public/images',
                    to: 'images',
                }
            ]
        ),
    ]
}
