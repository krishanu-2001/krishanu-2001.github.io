import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  // Global ignores
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', '.next/**'],
  },
  // JavaScript recommended
  js.configs.recommended,
  // TypeScript recommended
  ...tseslint.configs.recommended,
  // Prettier config (disables conflicting rules)
  eslintConfigPrettier,
  // Main config for TS/TSX files
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettier,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // React hooks rules
      ...reactHooks.configs.recommended.rules,
      // React refresh rule
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // Prettier as ESLint rule
      'prettier/prettier': 'error',
      // Custom rules
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'consistent-return': 'warn',
    },
  },
  // Config for JS files
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      prettier: prettier,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'consistent-return': 'warn',
    },
  },
]
