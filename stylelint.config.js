module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  customSyntax: 'postcss-html',
  rules: {
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always-single-line',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['include', 'mixin', 'use', 'each', 'for', 'forward', 'if', 'else'],
      },
    ],
    'rule-empty-line-before': null,
    'selector-class-pattern': null,
    'no-descending-specificity': null,
  },
  overrides: [
    {
      files: ['**/*.{css,scss}'], // stylelint14 支持 独立样式文件校验
      customSyntax: 'postcss-scss',
    },
  ],
};
