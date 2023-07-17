const _ = require('lodash')
const baseConfig = require('./baseConfig')

module.exports = {
  defineEslintConfig(extendsConfig = {}) {
    const { prettier } = extendsConfig
    delete extendsConfig.prettier
    const config = {
      ...baseConfig,
      ...extendsConfig
    }
    if (prettier) {
      _.merge(config, {
        extends: ['plugin:prettier/recommended']
      })
    }
    return config
  }
}
