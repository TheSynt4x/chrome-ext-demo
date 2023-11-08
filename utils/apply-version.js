import fs from 'fs'
import packado from '../package.json' assert { type: "json" };
import manifest from '../src/manifest.json' assert { type: "json" };

const version = packado.version;

const manifestWithVersion = Object.assign(manifest, {
    version,
});

fs.writeFileSync('./src/manifest.json', JSON.stringify(manifestWithVersion, null, 2));