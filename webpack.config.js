var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
module.exports = {
    entry: {
        idx:'./index.js'
    },
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: '',
        filename: '[name]_bundle.js'
    },
    devServer : {
        inline : true,
        port : 7788,
        contentBase: __dirname + '/public'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                include:[path.resolve(__dirname, "public/style"),],
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            }, {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("./style/[name].css")
    ]
};
