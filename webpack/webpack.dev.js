const config = require('./webpack.base');

config.set('mode', process.env.NODE_ENV)

config.devServer
  .port(7777)
  .host('localhost')
  .quiet(true)
  .hot(true)
  .open(true)
  .https(false)
  .disableHostCheck(true)
  .inline(true)
  .stats('errors-only')
  .overlay(false)
  .clientLogLevel('silent')
  .compress(true)
  .historyApiFallback(true);

module.exports = config.toConfig();