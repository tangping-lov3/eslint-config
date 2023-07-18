console.log('%c 🍭 you should install devDeps run npm i eslint typescript -D', 'font-size:20px;background-color: #ED9EC7;color:#fff;')

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
    'arrow-parens': ['error', 'as-needed'],
    'vue/comma-dangle': 0,
    '@typescript-eslint/brace-style': 0,
    'operator-linebreak': 0,
    '@typescript-eslint/indent': 0,
    'antfu/generic-spacing': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/v-on-event-hyphenation': 0,
    'quote-props': 0
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
