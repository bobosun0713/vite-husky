const path = require("node:path");
const createAliasSetting = require("@vue/eslint-config-airbnb/createAliasSetting");

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "@vue/eslint-config-airbnb",
    "plugin:import/recommended",
    "plugin:vue/strongly-recommended",
    "prettier",
    "prettier/prettier"
  ],
  plugins: ["vue", "simple-import-sort", "import"],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-reserved-component-names": "off",
    "vue/mustache-interpolation-spacing": ["error", "always"],
    "vue/prop-name-casing": "error",
    "vue/require-default-prop": "error",
    "vue/require-prop-types": "error",

    "no-console": "off",
    "no-debugger": "off",
    "no-empty": ["error", { allowEmptyCatch: true }],
    quotes: ["error", "double"],

    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error"
  },
  settings: {
    ...createAliasSetting({
      "@": `${path.resolve(__dirname, "./src")}`
    })
  }
};
