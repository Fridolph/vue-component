module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['mocha', 'sinon-chai'],

    client: {
      chai: {
        includeStack: true
      }
    },

    files: [
      'dist/**/*.spec.js',
      'dist/**/*.spec.css'
    ],


    exclude: [],

    preprocessors: {},

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['ChromeHeadless'],

    singleRun: true,

    concurrency: Infinity
  })
}
