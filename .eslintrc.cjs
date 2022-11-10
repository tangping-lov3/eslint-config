module.exports = {
  extends: ['@antfu'],
  rules: {
    'semi': [2, 'never'],
    'antfu/if-newline': 0,
    'no-console': 'off',
    'prefer-const': ['error', { destructuring: 'all' }],
    'arrow-parens': ['error', 'as-needed']
  }
}
