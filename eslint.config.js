const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: [
      'node_modules/',
      'build/*.js',
      'coverage/*.js',
      'coverage/*',
      'jest/*.js',
      '__tests__/*',
      '__tests__/*.js',
    ],
  },
]);
