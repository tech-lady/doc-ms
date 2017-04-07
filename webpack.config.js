import webpack from 'webpack';
import path from 'path';

export default {
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?reload=true',
    './client/src/index.js'
  ],
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  target: 'web',
  devServer: {
    contentBase: './src/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react']
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
           { loader: 'style-loader' },
           { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        use: [
          { loader: 'json-loader' }
        ]
      },
      {
        test: /\.jpg$/,
        use: [
          { loader: 'file-loader' }
        ]
      },
      {
        test: /\.(png|jpg|ttf|woff2|woff|svg|eot)$/,
        use: [
          {
            loader: 'url-loader?limit=1000'
          }
        ]
      }
    ]
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
