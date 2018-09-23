const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')
const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const modifyVars = require('./ant-overrides')

module.exports = function override (config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config
  )
  config = rewireLess.withLoaderOptions({
    modifyVars,
    javascriptEnabled: true
  })(config, env)
  config = rewireReactHotLoader(config, env)
  return config
}
