var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/**/*spec.js',
      'src/**/*spec.jsx'
    ],
    preprocessors: {
      'src/**/*spec.js': ['webpack'],
      'src/**/*spec.jsx': ['webpack']
    },
    webpack: webpackConfig, 
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}