const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (config, resolve) => {
  return () => {
    config.plugin('mini-css-extract').use(MiniCssExtractPlugin, [
      {
        filename: '[contenthash:6].[name].css?v=[contenthash]',
        chunkFilename: '[contenthash:6].[id].css?v=[contenthash]',
        ignoreOrder: false,
        linkType: 'text/css',
      },
    ]);
  };
};
