var ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('/css/[name].css');

//const webpack = require('webpack');
//const commonsPlugin = new webpack.optimize.CommonsChunkPlugin('commons', '/js/common.js');

module.exports = {
  entry: {
    main:'./src/index.js',
    about:'./src/about.js'
  },
  output:{
    path:'./build/',
    publicPath: '/',
    filename: './js/[name].js',
  },
  module:{
    loaders:[
        {
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015','react','stage-2']
          }
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css-loader!sass-loader')
        },
    ]
  },
  plugins: [extractCSS],
  devServer: {
    historyApiFallback: true,
    contentBase: './build',
    inline: true,
    hot: false,
  }
}

  //plugins: [extractCSS,commonsPlugin],
