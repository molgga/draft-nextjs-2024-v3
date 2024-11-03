import type { UserConfig } from '@commitlint/types';

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-case': [2, 'always', ['lower-case']],
  },
};

export default config;
