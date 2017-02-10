var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015','react','stage-2']
      }
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!sass')
    },
  ]
  },
  plugins: [
      new ExtractTextPlugin('styles.css', {
          allChunks: true
      })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx','.css','scss','sass']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './build',
    inline: true,
    hot: false,
  }
};
