module.exports = (config, resolve) => {
  return () => {
    config
      .entry('app')
      .add(resolve('src/index.js'))
      .end()
      .output
      .path(resolve('dist'))
      .filename('bundle.[hash:6].js')
      .publicPath('/');
    config.devtool('cheap-module-eval-source-map');
  }
};
