module.exports = {
  globals: {
    NodeJS: true,
  },
  extends: ['@repo/eslint-config/next.js'],
  rules: {
    'import/no-named-as-default': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    'no-nested-ternary': 'off',
    'react/hook-use-state': 'off',
    'react/jsx-sort-props': 'off',
    'unicorn/filename-case': 'off',
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: false },
    ],
  },
};
