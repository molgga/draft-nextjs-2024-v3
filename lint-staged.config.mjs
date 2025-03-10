export default {
  // 'src/**/*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc}': ['biome format --write --no-errors-on-unmatched'],
  // 'src/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': 'oxlint --fix',
  // 'src/**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  'apps/web/src/**/*.{js,jsx,ts,tsx}': [
    'pnpm --filter web exec eslint --fix',
    'pnpm --filter web exec prettier --write',
  ],
};
