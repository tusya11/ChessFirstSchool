// craco.config.js
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Удаляем source maps
      webpackConfig.devtool = false;

      // Отключаем генерацию комментариев и лицензий
      webpackConfig.optimization.minimizer.forEach((plugin) => {
        if (plugin.constructor.name === "TerserPlugin") {
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
          ![
            "LicenseWebpackPlugin",
            "LicensePlugin",
            "ExtractLicensesPlugin",
          ].includes(plugin.constructor?.name),
      );

      // 3. Настройка имен JS-файлов с хэшем
      webpackConfig.output = {
        ...webpackConfig.output,
        filename: "static/js/[name].[contenthash:8].js",
        chunkFilename: "static/js/[name].[contenthash:8].chunk.js",
      };

      // 4. Настройка имен CSS-файлов с хэшем
      const miniCssExtractPlugin = webpackConfig.plugins.find(
        (plugin) => plugin.constructor.name === "MiniCssExtractPlugin",
      );

      if (miniCssExtractPlugin) {
        miniCssExtractPlugin.options.filename =
          "static/css/[name].[contenthash:8].css";
        miniCssExtractPlugin.options.chunkFilename =
          "static/css/[name].[contenthash:8].chunk.css";
      }

      const fileLoaderRules = webpackConfig.module.rules
        .flatMap((rule) => rule.oneOf || [])
        .filter(
          (rule) => rule && rule.loader && rule.loader.includes("file-loader"),
        );

      fileLoaderRules.forEach((rule) => {
        if (rule.options && rule.options.name) {
          // Меняем формат имен для изображений, шрифтов и т.д.
          if (rule.options.name.includes("[hash]")) {
            rule.options.name = "static/media/[name].[hash:8].[ext]";
          }
        }
      });

      return webpackConfig;
    },
  },
};
