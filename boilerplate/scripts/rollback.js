const fs = require('fs');
const path = require('path');

module.exports = async (runner, args) => {
  try {
    console.log('> Cleaning Monorepo....')

    const rc = args.rc;

    // update nx.json
    const nxPath = path.join(rc.workspace_path, 'nx.json')
    const nxJSON = JSON.parse(fs.readFileSync(nxPath, 'utf8'));

    // nx json backup
    if (!fs.existsSync(`${nxPath}.backup`)) {
      fs.copyFileSync(nxPath, `${nxPath}.backup`);
    }
    
    if (!('workspaceLayout' in nxJSON)) {
      nxJSON['workspaceLayout'] = {
        "libsDir": "packages"
      }
    } else {
      nxJSON['workspaceLayout']['libsDir'] = "packages"
    }

    fs.writeFileSync(nxPath, JSON.stringify(nxJSON, null, 2));


    await runner.execute(`npx nx g @nrwl/workspace:rm ${rc.path}`, {
      cwd: rc.workspace_path
    })

    fs.copyFileSync(`${nxPath}.backup`, nxPath);
    fs.rmSync(`${nxPath}.backup`);

    console.log('> Rollback ✅ DONE')

  } catch {
    throw new Error('failed to rollback Nx');
  }
}