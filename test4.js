const esbuild = require('esbuild');
const fs = require('fs');

async function run() {
  await esbuild.build({
    entryPoints: ['prisma.config.ts'],
    bundle: true,
    platform: 'node',
    outfile: 'prisma.config.js',
  });
  const config = require('./prisma.config.js');
  console.log("Config keys:", Object.keys(config));
  console.log("Config default keys:", config.default && Object.keys(config.default));
}
run();
