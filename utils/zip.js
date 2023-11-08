import path from 'path';
import manifest from '../src/manifest.json' assert { type: "json" };
import packado from '../package.json' assert { type: "json" };
import { exec } from 'child_process';

const __dirname = path.resolve();

const zipName = `${manifest.name}-v${packado.version}.zip`;

exec('mkdir -p ./releases', () => {
    console.log('releases folder created');
})

const zipPath = path.resolve(__dirname, './releases', zipName);

const command = `zip -r ${zipPath} ./dist/build`;

exec(command, (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);
    console.error(stderr);
});