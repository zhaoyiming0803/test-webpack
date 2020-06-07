class TestWebpackPlugin {
  constructor() {
  }

  apply(compiler){
    compiler.hooks.thisCompilation.tap('TestWebpackPlugin', (compilation, params) => {
      console.log('params: ', Object.keys(params))
    })
  }
}

module.exports = TestWebpackPlugin