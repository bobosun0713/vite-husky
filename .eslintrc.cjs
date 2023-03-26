const path = require('node:path');
const createAliasSetting = require('@vue/eslint-config-airbnb/createAliasSetting');

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ["@vue/airbnb","plugin:import/recommended", "plugin:vue/strongly-recommended", "prettier", "prettier/prettier"],
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
