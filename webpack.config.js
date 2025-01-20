const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
    context: path.resolve(__dirname, "./src"),
    resolve: {
        extensions: [".js",".ts", ".tsx"]         },
    entry: {
        app: './index.tsx',
        appStyles: "./ComponentStyles.scss",
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, "dist"),
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },

            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },

            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                         loader: "css-loader",
                         options: {
                         modules: true,
                         },
                         },
                        
                ],

            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },



        ],
    },
    plugins: [
        //Generate index.html in /dist => https://github.com/ampedandwired/htmlwebpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html', //Name of file in ./dist/
            template: "./index.html",            //Name of template in ./src
            scriptLoading: 'blocking',

        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),

        new CleanWebpackPlugin(),
    ],
    devtool: 'eval-source-map',
    devServer: {
        port: 8080,
        devMiddleware: {
             stats: "errors-only",
             },
            
    },

};
