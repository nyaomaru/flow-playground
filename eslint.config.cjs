// eslint.config.cjs
const hermes = require('hermes-eslint');
const js = require('@eslint/js');
const ftFlow = require('eslint-plugin-ft-flow');

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  {
    files: ['**/*.{js,jsx,flow,js.flow}'],
    languageOptions: {
      parser: hermes,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      'ft-flow': ftFlow,
    },
    rules: {
      ...js.configs.recommended.rules,

      'ft-flow/require-valid-file-annotation': 'error',
      'ft-flow/type-id-match': 'warn',
      'ft-flow/no-dupe-keys': 'error',
    },
  },
];
