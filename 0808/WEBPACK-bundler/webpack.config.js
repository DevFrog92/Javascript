const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPligin = require('copy-webpack-plugin')

module.exports = {
 // 파일을 읽어들이기 시작하는 진입점 설정 - 보통 js를 진입점으로 사용한다.
  entry: './js/main.js',
  output: {
    clean: true
  },
  module:{
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use:[
          'babel-loader'
        ]
      }
    ]
  },
  //  번들링 후 결과물의 처리 방식 등 다양한 플러그인등을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPligin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],
  devServer: {
    host: "localhost"
  }
}