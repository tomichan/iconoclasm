module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "eslint-disable-next-line space-before-function-paren": "off"
  }
}
