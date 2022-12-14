{
  debug: true,
  devtool: 'inline-source-map',
  noInfo: true,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'client/index')

  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'dist/bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './client')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
        test: /app\/js\/.+.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] },
      { test: /.\json$/, loaders: ['json-loader'] },
      { test: /\.js$/, include: path.join(__dirname, 'client'), loaders: ['babel'] },
      { test: /(\.css)$/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: /\.(png|jpg)$/, loader: 'url?limit=8192' },
    ]
  }
};
