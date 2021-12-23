const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (config, resolve) => {
  return () => {
    config.plugin('BundleAnalyzerPlugin').use(BundleAnalyzerPlugin);
  };
};
