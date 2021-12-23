module.exports = (config, resolve) => {
  return () => {
    config
      .entry('app')
      .add(resolve('src/index.js'))
      .end()
      .set('mode', process.env.NODE_ENV)
      .output.path(resolve('dist'))
      .filename('[name].[contenthash:6].js')
      .publicPath('/');
    config.devtool('eval-source-map');
  };
};
