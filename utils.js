const _ = require('lodash')
const baseConfig = require('./baseConfig')
const prettierConfig = require('./prettierrc')

module.exports = {
  defineEslintConfig(extendsConfig = {}) {
    const { prettier, prettierVue } = extendsConfig
    delete extendsConfig.prettier
    const _extends = _.concat(baseConfig.extends, extendsConfig.extends || [])
    const config = {
      ..._.merge({}, baseConfig, extendsConfig),
      extends: _extends
    }
    if (prettier) {
      const _prettier = typeof prettier === 'boolean' ? ['error', prettierConfig] : prettier
      config.extends = _.concat(config.extends, ['plugin:prettier/recommended'])
      if (prettierVue) {
        //
      }
      _.merge(config.rules, {
        'prettier/prettier': _prettier
      })
    }

    return config
  }
}

