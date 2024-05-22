module.exports = {
  env: {
    browser: true,
    es2023: true,
    node: true,
  },
  extends: ['airbnb-typescript/base', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.cjs', 'dist/*', 'vite.config.mjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  rules: {
    'prettier/prettier': ['error', {"endOfLine": "auto", "singleAttributePerLine": true}],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  overrides: [
    {
      excludedFiles: ['node_modules/**', '*.cjs'],
      files: ["**/*.ts", "**/*.html"],
    },
  ],
};
