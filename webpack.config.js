
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  target: 'web',
  mode: 'development',
  entry: {
    index: './src/index.tsx'
  },

  // output
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  // plugins
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/components/page_home/index.php' },
        { from: './src/components/page_search/page_search.php' },
        { from: './src/components/_assets' }
      ]
    })
  ],

  // loaders
  module: {
    rules: [
      { test: /\.html$/i, loader: 'html-loader' },
      { test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader' },
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  }
};
