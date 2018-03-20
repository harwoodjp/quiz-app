const path = require("path")

module.exports = {

  mode: "development",

	entry: {
		web: path.resolve(__dirname, "./public/js/web/index.js"),
		app: path.resolve(__dirname, "./public/js/app/index.js")
	},  
  output: {
    path: path.join(__dirname, './public/dist/'),
    publicPath: "/public",
    filename: '[name].bundle.js',
  },

  watch: true,

  module: {
    rules: [

      { // babel, es6, react
        test: /\.js$/,
        exclude: /node_modules/, 
        use: [{
          loader: "babel-loader"
        }]
      },

      { // sass
        test: [/\.css$/, /\.scss$/, /\.sass$/],
        use: [
          { loader: "style-loader" }, 
          { loader: "css-loader" }, 
          { loader: "sass-loader" }
        ]
      }

    ],
  },

  devServer: {
    contentBase: path.join(__dirname, './'),
    compress: true,
    port: 1776
  }  
}