class RemoveCommentsPlugin {
    constructor() {
    }

    apply (compiler) {
        compiler.hooks.emit.tap('RemoveCommentsPlugins', compilation => {
            Object.keys(compilation.assets).forEach(key => {
                const content = compilation.assets[key].source()
                const newContent = content.replace(/(\/\/.*$)|(\/\*(.|\s)*?\*\/)/g, '')
                compilation.assets[key] = {
                    size: () =>　newContent.length,
                    source: () => newContent
                }
            })
        })
    }
}

module.exports = RemoveCommentsPlugin