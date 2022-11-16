module.exports = {
    extends: ['@antfu'],
    rules: {
      'semi': [2, 'never'],
      'vue/multi-word-component-names': 0,
      'vue/singleline-html-element-content-newline': 0,
      'vue/html-self-closing': 0,
      'antfu/if-newline': 0,
      '@typescript-eslint/comma-dangle': ['error', 'never'],
      'no-console': 'off',
      'prefer-const': ['error', { destructuring: 'all' }],
      'arrow-parens': ["error", 'as-needed'],
      'vue/comma-dangle': 0,
      '@typescript-eslint/brace-style': 0,
      'operator-linebreak': 0,
      '@typescript-eslint/indent': 0
    }
  }