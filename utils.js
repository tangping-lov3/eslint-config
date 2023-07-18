const _ = require('lodash')
const baseConfig = require('./baseConfig')
const prettierConfig = require('./prettierrc')

module.exports = {
  defineEslintConfig(extendsConfig = {}) {
    const { prettier } = extendsConfig
    delete extendsConfig.prettier
    const _extends = _.concat(baseConfig.extends, extendsConfig.extends || [])
    const config = {
      ...baseConfig,
      ...extendsConfig,
      extends: _extends
    }
    if (prettier) {
      config.extends = _.concat(config.extends, ['plugin:prettier/recommended'])
      _.merge(config.rules, {
        'prettier/prettier': ['error', prettierConfig]
      })
    }

    return config
  }
}
