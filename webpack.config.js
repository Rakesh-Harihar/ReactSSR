// const dev = process.env.NODE_ENV !== "production";
const path = require("path");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackNodeExternals=require('webpack-node-externals');

const clientConfig = {
    target:'node',
    entry:'./src/client.js',
    output:{
        filename:'client_bundle7.js',
        path:path.resolve(__dirname,'build/public'),
        publicPath:'/build/public'
    },
    module:{
        rules:[
            {
            test:/\.js$/,
            loader:'babel-loader',
            exclude:'/node_modules/',
            
            options:{
                presets:[
                
                    ['env' , {
                        target: {browsers: ['last 2 versions']}
                    }],
                    'react',
                    'stage-0',
                    
                   
                ]
            }
           
        },
        {
            test: /\.scss$/,
            use: [
             
               MiniCssExtractPlugin.loader,
               "css-loader",
               "sass-loader"
             ]      
    },
        
       ]
   },
   plugins: [
       new MiniCssExtractPlugin({
         filename: 'style.css',
       })
     ],
}

const serverConfig = {
    target:'node',
    entry:'./src/server.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'build'),
        publicPath:'/build'
    },
    module:{
        rules:[
            {
            test:/\.js$/,
            loader:'babel-loader',
            exclude:'/node_modules/',
            options:{
                presets:[
                    ['env' , {
                        target: {browsers: ['last 2 versions']}
                    }],
                    'react',
                    'stage-0',
                   
                   
                ]
            },
            
        },
     {
             test: /\.scss$/,
             use: [
              
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
              ]      
     },
         
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'style.css',
        })
      ],
    externals:[webpackNodeExternals()]
}


// const plugins = [
//     new FriendlyErrorsWebpackPlugin(),
// ];

// if (!dev) {
//     plugins.push(new BundleAnalyzerPlugin({
//         analyzerMode: "static",
//         reportFilename: "webpack-report.html",
//         openAnalyzer: false,
//     }));
// }

// const clientConfig = {
//     mode: dev ? "development" : "production",
//     context: path.join(__dirname, "src"),
//     devtool: dev ? "none" : "source-map",
//     target: "node",
//     externals: [nodeExternals()],
//     entry: {
//         app: "./src/client.js",
//     },
//     // resolve: {
//     //     modules: [
//     //         path.resolve("./src"),
//     //         "node_modules",
//     //     ],
//     // },
//     output: {
//         path: path.resolve(__dirname, "dist"),
//         filename: 'client_bundle.js',
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js?$/,
//                 exclude:'/node_modules/',
//                 loader: "babel-loader",
//                 options:{
//                     presets:[
                    
//                         ['env' , {
//                             target: {browsers: ['last 2 versions']}
//                         }],
//                         'react',
//                         'stage-0',
                        
                       
//                     ]
//                 }
//             },
//             {
//                 test: /\.scss$/,
//                 use: [

//                     MiniCssExtractPlugin.loader,
//                     "css-loader",
//                     "sass-loader"
//                 ]
//             },

//         ]
//     },
//     plugins: [
//         new MiniCssExtractPlugin({
//             filename: 'style.css',
//         })
//     ],
// }

// const serverConfig = {
//     mode: dev ? "development" : "production",
//     context: path.join(__dirname, "src"),
//     devtool: dev ? "none" : "source-map",
//     target: "node",
//     externals: [nodeExternals()],
//     entry: {
//         app: "./src/server.js",
//     },
//     // resolve: {
//     //     modules: [
//     //         path.resolve("./src"),
//     //         "node_modules",
//     //     ],
//     // },
//     module: {
//         rules: [
//             {
//                 test: /\.js?$/,
//                 exclude:'/node_modules/',
//                 loader: "babel-loader",
//                 options:{
//                     presets:[
                    
//                         ['env' , {
//                             target: {browsers: ['last 2 versions']}
//                         }],
//                         'react',
//                         'stage-0',
                        
                       
//                     ]
//                 }
//             },
//         ],
//     },
//     output: {
//         path: path.resolve(__dirname, "dist"),
//         filename: "[name].bundle.js",
//     },
//     plugins,
// };

module.exports = [clientConfig, serverConfig];