module.exports = {
  //compress: false,
    webpackDevMiddleware: (config) => {
      config.watchOptions.poll = 300;
      return config;
    },
  };
  