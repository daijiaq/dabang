// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
// import pluginVue from "eslint-plugin-vue";


// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   ...pluginVue.configs["flat/essential"],
//   {files: ["**/*.vue"], languageOptions: {parserOptions: {parser: tseslint.parser}}},
// ];

module.exports = {
  "env": {
      "browser": true,
      "es2021": true,
      "node": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:vue/vue3-essential"
  ],
  "overrides": [
      {
          "env": {
              "node": true
          },
          "files": [
              ".eslintrc.{js,cjs}"
          ],
          "parserOptions": {
              "sourceType": "script"
          }
      }
  ],
  "parserOptions": {
      "ecmaVersion": "latest",
      "parser": "@typescript-eslint/parser",
      "sourceType": "module"
  },
  "plugins": [
      "prettier",
      "@typescript-eslint",
      "vue"
  ],
  "rules": {
  // "off" or 0 - 关闭规则
 // "warn" or 1 - 将规则视为一个警告
 // "error" or 2 - 将规则视为一个错误

 // 要求使用 const 声明那些声明后不再被修改的变量
 'prefer-const': 1, 
 // 禁用 console
 'no-console': 'warn', 
 // 禁用 debugger
 'no-debugger': 'warn', 
 // 要求箭头函数的参数使用圆括号
 'arrow-parens': ['error', 'as-needed'], 
 // 禁止在Vue组件的模板中存在多个根元素
 'vue/no-multiple-template-root': 'off',
 // 强制使用 === 和 !==
 eqeqeq: 2,
 // 允许Vue组件名为单名词
 'vue/multi-word-component-names': 'off',
 // 运行使用any绕过ts校验
 '@typescript-eslint/no-explicit-any': 'off',
 // 禁止空的代码块
 'no-empty': ['error', { allowEmptyCatch: true }]
  }
}
