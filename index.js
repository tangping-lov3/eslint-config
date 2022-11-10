module.exports = {
    extends: ['@antfu', './.eslintrc-auto-import.json'],
    rules: {
      'semi': [2, 'never'],
      'vue/multi-word-component-names': 0,
      'vue/singleline-html-element-content-newline': 0,
      'vue/html-self-closing': 0,
      'antfu/if-newline': 0,
      '@typescript-eslint/comma-dangle': ['error', 'never'],
      'no-console': 'off',
      'prefer-const': ['error', { destructuring: 'all' }],
      'arrow-parens': ['error', 'as-needed']
    }
  }