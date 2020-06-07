const path = require('path')
const RemoveCommentsPlugin = require('./plugins/RemoveCommentsPlugin')
const ClearWebpackPlugin = require('./plugins/CleanWebpackPlugin')
const TestWebpackPlugin = require('./plugins/TestWebpackPlugin')

function resolve (dir, file = '') {
    return path.resolve(__dirname, dir, file)
}

module.exports = {
    mode: 'development',
    entry: resolve('src', 'index.js'),
    output: {
        filename: "main.js",
        path: resolve('dist')
    },
    resolveLoader: {
        modules: ['node_modules', resolve('loaders')]
    },
    plugins: [
      new RemoveCommentsPlugin(),
      new ClearWebpackPlugin(),
      new TestWebpackPlugin({})
    ]
}
