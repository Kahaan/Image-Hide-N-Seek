// var path = require("path");
// var webpack = require("webpack");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
//
// var plugins = []; // if using any plugins for both dev and production
// var devPlugins = []; // if using any plugins for development
//
// var prodPlugins = [
//   new webpack.DefinePlugin({
//     "process.env": {
//       NODE_ENV: JSON.stringify("production")
//     }
//   })
// ];
//
// plugins = plugins.concat(
//   process.env.NODE_ENV === "production" ? prodPlugins : devPlugins
// );
//
// module.exports = {
//   context: __dirname,
//   entry: "./frontend/index.jsx",
//   output: {
//     path: path.resolve(__dirname, "app", "assets", "javascripts"),
//     filename: "bundle.js"
//   },
//   plugins: plugins,
//   optimization: {
//     minimizer: [
//       new UglifyJsPlugin({
//         test: /\.js(\?.*)?$/i
//       })
//     ]
//   },
//   module: {
//     rules: [
//       {
//         test: [/\.jsx?$/, /\.js?$/],
//         exclude: /node_modules/,
//         loader: "babel-loader",
//         query: {
//           presets: ["@babel/preset-env", "@babel/react"]
//         }
//       }
//     ]
//   },
//   devtool: "source-maps",
//   resolve: {
//     extensions: [".js", ".jsx", "*"]
//   }
// };

var path = require("path");
var webpack = require("webpack");

var plugins = []; // if using any plugins for both dev and production
var devPlugins = []; // if using any plugins for development

var prodPlugins = [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true
    }
  })
];

plugins = plugins.concat(
  process.env.NODE_ENV === "production" ? prodPlugins : devPlugins
);

module.exports = {
  context: __dirname,
  entry: "./frontend/index.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["env", "react"]
        }
      }
    ]
  },
  devtool: "source-maps",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
