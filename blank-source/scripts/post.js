const fs = require('fs');
const path = require('path');

module.exports = async (runner, args) => {
  try {
    console.log('> POST: Cleansing (Yumi Module Boilerplate):');

    const rc = args.rc;

    const nxPath = path.join(rc.workspace_path, 'nx.json')
    fs.copyFileSync(`${nxPath}.backup`, nxPath);
    fs.rmSync(`${nxPath}.backup`);

    await runner.execute([], {
      cwd: args.workspacePath
    })

    console.log('> POST: cleansing process ✅ DONE');

  } catch(error) {
    console.error(error);
    throw new Error('Failed to clean Yumi Module Boilerplate');
  }
}
