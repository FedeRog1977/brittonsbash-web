export default {
  'import/export': 'error',
  'import/no-deprecated': 'error',
  'import/no-empty-named-blocks': 'error',
  'import/no-extraneous-dependencies': 'error',
  'import/no-mutable-exports': 'error',
  'import/no-named-as-default': 'error',
  'import/no-named-as-default-member': 'error',
  'import/no-unused-modules': 'off',
  'import/no-amd': 'error',
  'import/no-commonjs': 'off',
  'import/no-import-module-exports': 'error',
  'import/no-nodejs-modules': 'off',
  'import/unambiguous': 'off',
  'import/default': 'error',
  'import/named': 'off',
  'import/namespace': 'error',
  'import/no-absolute-path': 'error',
  'import/no-cycle': 'error',
  'import/no-dynamic-require': 'error',
  'import/no-internal-modules': 'off',
  'import/no-relative-packages': 'error',
  'import/no-relative-parent-imports': 'off',
  'import/no-restricted-paths': 'off',
  'import/no-self-import': 'error',
  'import/no-unresolved': 'error',
  'import/no-useless-path-segments': 'error',
  'import/no-webpack-loader-syntax': 'error',
  'import/consistent-type-specifier-style': 'off',
  'import/dynamic-import-chunkname': 'off',
  'import/exports-last': 'off',
  'import/extensions': 'off',
  'import/first': 'error',
  'import/group-exports': 'off',
  'import/max-dependencies': 'off',
  'import/newline-after-import': ['error', { considerComments: true }],
  'import/no-anonymous-default-export': 'off',
  'import/no-default-export': 'off',
  'import/no-duplicates': ['error', { considerQueryString: true }],
  'import/no-named-default': 'error',
  'import/no-named-export': 'off',
  'import/no-namespace': 'off',
  'import/no-unassigned-import': 'off',
  'import/order': [
    'error',
    {
      alphabetize: { order: 'asc', caseInsensitive: true },
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
    },
  ],
  'import/prefer-default-export': 'off',
};
