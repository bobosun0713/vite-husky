const path = require('node:path');
const createAliasSetting = require('@vue/eslint-config-airbnb/createAliasSetting');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/eslint-config-airbnb',
  ],
  overrides: [
  ],
  plugins: ['vue', 'simple-import-sort', 'import'],
  rules: {
    'vue/multi-word-component-names': 'error',
    'vue/no-reserved-component-names': 'error',
  },
  settings: {
    ...createAliasSetting({
      '@': `${path.resolve(__dirname, './src')}`,
    }),
  },
};
