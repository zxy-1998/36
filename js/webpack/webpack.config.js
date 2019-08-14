const path = require("path");
const HtmlWebpackPlugin = require( "html-webpack-plugin");
module.exports = {
    entry:{
        index:"./src/index.js"
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            hash:true,
            template:"./src/index.html"
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname,"dist"),
        host:'localhost'
    }

}