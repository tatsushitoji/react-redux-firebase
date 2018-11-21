const path = require('path');
const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const {
  NODE_ENV,
  PUBLIC_PATH,
} = process.env;

const devMode = NODE_ENV !== 'production';

const base = {
  mode: NODE_ENV || "development",

  entry: "./src/index.tsx",

  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: PUBLIC_PATH || '/',
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "babel-loader" },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts',
          }
        }]
      }
    ]
  },

  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          enforce: true,
        }
      },
    }
  },

  node: {
    fs: 'empty',
  },
};

const development = merge(base, {
  devtool: "cheap-module-eval-source-map",
  devServer: {
    stats: { colors: true },
    port: 3000,
    historyApiFallback: true,
  },
});

const production = merge(base, {
  plugins: [
    new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          sourceMap: true,
          parallel: true,
          compress: {
            collapse_vars: false, // workaround for a minifier's bug: https://github.com/terser-js/terser/issues/120
            drop_console: true,
          },
        },
      }),
    ],
  }
});


module.exports = {
  ...(NODE_ENV === 'production' ? production : development),
};