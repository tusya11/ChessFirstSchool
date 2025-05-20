// craco.config.js
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Удаляем source maps
      webpackConfig.devtool = false;

      // Отключаем генерацию комментариев и лицензий
      webpackConfig.optimization.minimizer.forEach(plugin => {
        if (plugin.constructor.name === 'TerserPlugin') {
          plugin.options.extractComments = false;
        }
      });

      // 1. Отключаем генерацию LICENSE-файлов через TerserPlugin
      webpackConfig.optimization = {
        ...webpackConfig.optimization,
        minimize: true,
        minimizer: [
          new TerserPlugin({
            extractComments: false, // Отключаем создание .LICENSE.txt файлов
            terserOptions: {
              format: {
                comments: false, // Удаляем все комментарии (включая лицензионные)
              },
            },
          }),
        ],
      };

      // 2. Удаляем плагины, связанные с лицензиями
      webpackConfig.plugins = webpackConfig.plugins.filter(
        (plugin) => 
          !['LicenseWebpackPlugin', 'LicensePlugin', 'ExtractLicensesPlugin'].includes(plugin.constructor?.name)
      );

      return webpackConfig;
    },
  },
};