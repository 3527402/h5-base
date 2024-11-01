module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      // 规则校验支持 "🧪test: 测试支持gitmoji" 或者 "test: 测试支持gitmoji"
      // eslint-disable-next-line
      headerPattern: /^([\u23ea-\ufe0f]{1,2}\s\w+|\w+)(?:\(([\w\$\.\-\* ]*)\))?\:\s(.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'init',
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
        '🎉 init',
        '✨ feat',
        '🐞 fix',
        '📃 docs',
        '🌈 style',
        '🦄 refactor',
        '🎈 perf',
        '🧪 test',
        '🔧 build',
        '🐎 ci',
        '🐳 chore',
        '↩ revert',
      ],
    ],
    'subject-max-length': [1, 'always', 150], // subject建议150字以内
  },
};
