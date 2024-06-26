import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import process from 'node:process'
import { antfu } from '@antfu/eslint-config'
import type { ESLint } from 'eslint'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintConfigPrettier from 'eslint-config-prettier'
import prettierrc from './prettierrc'

class EslintConfig implements ESLint.ConfigData {
  rules: ESLint.ConfigData['rules'] = {
    semi: [2, 'never'],
    'vue/multi-word-component-names': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-self-closing': 0,
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    'no-console': 'off',
    'prefer-const': ['error', { destructuring: 'all' }],
    'arrow-parens': [2, 'as-needed'],
    'vue/comma-dangle': 0,
    '@typescript-eslint/brace-style': 0,
    '@typescript-eslint/indent': 0,
    'antfu/generic-spacing': 0,
    'antfu/if-newline': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/v-on-event-hyphenation': 0,
    'quote-props': 0,
    'no-unused-vars': 1,
    'no-undef': 2,
    'style/comma-dangle': 0,
    'style/quote-props': 0,
    'style/brace-style': 0,
    'style/indent': 0,
    'style/operator-linebreak': 0,
    curly: [2, 'all'],
    'style/arrow-parens': [0, 'as-needed'],
    'style/indent-binary-ops': 0,
    'style/member-delimiter-style': [
      2,
      {
        multiline: {
          delimiter: 'none',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        },
        multilineDetection: 'brackets'
      }
    ]
  }
}

type AntfuParams = Parameters<typeof antfu>

function defineEslintConfig(
  options: AntfuParams[0] & {
    autoImport?: boolean | string
    prettier?: boolean
  } = {},
  ...rest: AntfuParams[1][]
) {
  const _prettier = options.prettier ?? true
  const _autoImport =
    typeof options.autoImport === 'string'
      ? options.autoImport
      : options.autoImport === true
        ? '.eslintrc-auto-import.json'
        : false

  const _antfu = antfu(
    {
      ...new EslintConfig(),
      vue: true,
      typescript: true,
      ...options,
      formatters: _prettier
        ? {}
        : {
            css: true,
            html: true
          }
    },
    ...rest
  )

  if (_prettier) {
    _antfu.append(eslintConfigPrettier, prettierRecommended, {
      rules: {
        'prettier/prettier': ['error', prettierrc]
      }
    })
  }

  if (_autoImport) {
    const autoImport = JSON.parse(readFileSync(join(process.cwd(), _autoImport), 'utf-8'))
    _antfu.append({
      languageOptions: {
        ...autoImport
      }
    })
  }

  return _antfu
}

export default defineEslintConfig
export { defineEslintConfig }
