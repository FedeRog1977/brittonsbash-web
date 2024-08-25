/* eslint-disable no-console */
import config from './eslint.config.js';

const mode = process.argv[2] === 'all' ? 'all' : 'enabled';

const allRules = Object.assign(...config.map((c) => c.rules || {}));

if (mode === 'all') {
  console.log(allRules);
  console.log(`All Rules: ${Object.keys(allRules).length}`);
} else {
  const enabledRules = Object.fromEntries(
    Object.entries(allRules).filter(([_name, state]) => state !== 'off'),
  );
  console.log(enabledRules);
  console.log(`Enabled Rules: ${Object.keys(enabledRules).length}`);
}
