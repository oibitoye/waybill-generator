const path = require('path');

module.exports = {
    webpack: {
      alias: {
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@utils': path.resolve(__dirname, 'src/utils'),
    },
      configure: (webpackConfig) => {
        webpackConfig.resolve.alias = {
          ...webpackConfig.resolve.alias,
          crypto: require.resolve('crypto-browserify'),
        };
        return webpackConfig;
      },
    },
  };
  