const rmdir = require('rmdir')
const path = require('path')

class CleanWebpackPlugin {
  constructor() {
  }

  apply(compiler) {
    compiler.hooks.beforeCompile.tap('CleanWebpackPlugin', compilation => {
      rmdir(path.resolve(__dirname, '../dist'))
    })
  }
}

module.exports = CleanWebpackPlugin