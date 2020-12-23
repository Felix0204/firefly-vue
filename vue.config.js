'use strict'
const path = require('path')
<<<<<<< HEAD
const webpack = require('webpack')
=======
>>>>>>> 9431a47c58c007b3f195c7391da4ed1bf1125ecb
function resolve (dir) {
  return path.join(__dirname, dir)
}

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
<<<<<<< HEAD
  productionSourceMap: true,
=======
  productionSourceMap: false,
>>>>>>> 9431a47c58c007b3f195c7391da4ed1bf1125ecb
  devServer: {
    port: 3030,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: 'firefly',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack (config) {
    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])
<<<<<<< HEAD
    config.plugin('html').tap(args => {
      args[0].title = 'firefly'
      return args
    })
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }])
=======

>>>>>>> 9431a47c58c007b3f195c7391da4ed1bf1125ecb
    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')
  }
}
