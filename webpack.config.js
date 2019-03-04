const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
     
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html",
      hash: true,
      filename: "index.html"
    }),
  ],
  devServer: {
    // configuration for webpack-dev-server
    // contentBase: './app/public',  //source of static assets
    contentBase: path.join(__dirname, 'dist'),
    writeToDisk: true,
    port: 9000 // port to run dev-server
  }
};
