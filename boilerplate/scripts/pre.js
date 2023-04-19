const fs = require("fs");
const path = require("path");

module.exports = async (runner, args) => {
  try {
    console.log("> PRE: Installing prerequisites (API):");

    const rc = args.rc;

    // update nx.json
    const nxPath = path.join(rc.workspace_path, 'nx.json')
    const nxJSON = JSON.parse(fs.readFileSync(nxPath, 'utf8'));

    // nx json backup
    fs.copyFileSync(nxPath, `${nxPath}.backup`);
    
    if (!('workspaceLayout' in nxJSON)) {
      nxJSON['workspaceLayout'] = {
        "libsDir": "packages"
      }
    } else {
      nxJSON['workspaceLayout']['libsDir'] = "packages"
    }

    fs.writeFileSync(nxPath, JSON.stringify(nxJSON, null, 2));
    
    await runner.execute(
      [
        `nx g @nrwl/react:lib ${rc.path} --buildable`,
      ],
      {
        cwd: rc.workspace_path,
      }
    );

    console.log("> PRE: requisites ✅ DONE");
    
  } catch(ex) {
    console.error(ex);
    throw new Error("failed to install api pre-requisites");
  }
};
