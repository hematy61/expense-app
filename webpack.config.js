const path = require("path");
const devMode = process.env.Node_ENV !== 'production';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: './src/App.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 9191,
    open: 'google chrome',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? {loader: 'style-loader', options: {sourceMap: true}} : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]',
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    })
  ]
};