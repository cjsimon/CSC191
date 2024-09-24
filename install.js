var fs      = require('fs');
var resolve = require('path').resolve;
var join    = require('path').join;
var cp      = require('child_process');
var os      = require('os');

// Get library path
var lib = resolve(__dirname, '../lib/');

fs.readdirSync(lib)
    .forEach(function (mod) {
        var modPath = join(lib, mod);
        // Ensure path has package.json
        if (!fs.existsSync(join(modPath, 'package.json'))) return;

        // yarn binary based on OS
        var yarn = os.platform().startsWith('win') ? 'yarn.cmd' : 'yarn';
        var args = [];

        // Install folder
        cp.spawn(yarn, args, {
            env: process.env,
            cwd: modPath,
            stdio: 'inherit'
        });
    });
