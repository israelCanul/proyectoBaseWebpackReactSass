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
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.css$|\.scss$|\.sass$/,
      loader: 'style!css!sass',
    }
  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx','.css','scss','sass']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './build'
  }
};
