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
  // "off" or 0 - �رչ���
 // "warn" or 1 - ��������Ϊһ������
 // "error" or 2 - ��������Ϊһ������

 // Ҫ��ʹ�� const ������Щ�������ٱ��޸ĵı���
 'prefer-const': 1, 
 // ���� console
 'no-console': 'warn', 
 // ���� debugger
 'no-debugger': 'warn', 
 // Ҫ���ͷ�����Ĳ���ʹ��Բ����
 'arrow-parens': ['error', 'as-needed'], 
 // ��ֹ��Vue�����ģ���д��ڶ����Ԫ��
 'vue/no-multiple-template-root': 'off',
 // ǿ��ʹ�� === �� !==
 eqeqeq: 2,
 // ����Vue�����Ϊ������
 'vue/multi-word-component-names': 'off',
 // ����ʹ��any�ƹ�tsУ��
 '@typescript-eslint/no-explicit-any': 'off',
 // ��ֹ�յĴ����
 'no-empty': ['error', { allowEmptyCatch: true }]
  }
}
