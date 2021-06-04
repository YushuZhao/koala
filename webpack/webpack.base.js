const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Config = require('webpack-chain');

const config = new Config();
const resolve = p => path.join(process.cwd(), p);

config
  .entry('index')
  .add(resolve('src/index.js'))
  .end()
  .output
  .path(resolve('dist'))
  .filename('bundle.[hash:6].js')

config.module
  .rule('compile')
  .test(/\.jsx?$/)
  .set('exclude', /node_modules/)
  .use('babel')
  .loader('babel-loader')
  .options({
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          "corejs": 3
        }
      ]
    ]
  })

config.module
  .rule('css')
  .test(/\.css$/)
  .set('exclude', /node_modules/)
  .use('css')
  .loader('css-loader')

config.plugin('html')
  .use(HtmlWebpackPlugin, [{
    template: resolve("public/index.html"),
    filename: "index.html", // 打包后的文件名
    minify: {
      removeAttributeQuotes: false, // 是否删除属性的双引号
      collapseWhitespace: false, // 是否折叠空白
    },
    compile: false,
    hash: true, // 是否加上hash值,默认是 false
  }]);

config
  .resolve
  .extensions
  .add('.js')
  .add('.jsx')
  .add('.css')
  .end();

config
  .resolve
  .alias
  .set('@', resolve('src'))
  .set('views', resolve('src/views'))
  .set('api', resolve('src/api'))
  .end();
module.exports = config;