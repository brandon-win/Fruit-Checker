const path = require('path');

module.exports = {
  entry: './public/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'src'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  mode: 'production',

};