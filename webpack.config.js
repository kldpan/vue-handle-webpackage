const path=require("path");
// 设置htmlk模板自动引入  bundel.js
const htmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
    // 配置入口文件
    entry:{
        app:path.resolve(__dirname,"./src/main.js")
    },
    //出口文件
    output:{
        path:path.resolve(__dirname,"./dist"),
        filename:"js/bundel.js"
    },

    //webpack 只支持 解析js类型的文件,其他类型需要配置loader
    // loader
    module:{
        rules:[
            //直接支持 解析 Scss
            {
                test:/\.(css|scss)$/,
                use:["style-loader","css-loader","sass-loader"]
            },
            // js babel 做 Es6转义  转成Es5 浏览器支持
            { test: /\.js$/, loader: "babel-loader" }
            // 支持Vue后缀单文件组件
        ]
    },

    plugins:[
        new htmlWebpackPlugin({
            title:"xxx",
            filename:"index.html",
            template:"./src/index.html"
        })
    ],
    devServer:{
        host:"0.0.0.0",
        port:"8899",

        proxy:{
            "/apis":{
                // 源主机
                target:"https://cnodejs.org",
                // 是否跨域
                changeOrigin:true,
                // 复写 path 去掉 /apis
                pathRewrite:{
                    "^/apis":""
                }
            }
        }
    }
}

// http://www.test.baidu.com       /login?     uname=Msea&umi=123456

// https://cnodejs.org   

// /apis 
/*
axios({
    method:"GET",
    url:"/apis/login",
    params:{
        uname:"Msee",
        umi:"123456"
    }
})
*/