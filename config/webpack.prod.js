const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: ["./src/export2excel"], //入口文件,从项目根目录指定
    output: { //输出路径和文件名，使用path模块resolve方法将输出路径解析为绝对路径
        path: path.resolve(__dirname, "../dist/js"), //将js文件打包到dist/js的目录
        filename: "export2excel.js"
    },
    plugins: [
        // 压缩输出的 JS 代码
        new uglify()
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    mode: "development"
};
