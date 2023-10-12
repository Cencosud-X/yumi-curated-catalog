module.exports = async (runner, args) => {
  try {
    console.log("> PRE: Installing prerequisites (Source):");

    const rc = args.rc;

    const commands = [
      `npx nx g @nrwl/react:lib ${rc.path} --buildable`,
      'rm -rf ./.custom'
    ];

    // if the user , want to deep customize, remove the last command
    // which removes the .custom folder (seki engine files)
    if (rc && rc.settings && rc.settings.add_template_engine_files) {
      commands.pop()  // dont remove the .custom folder
    }

    await runner.execute(commands, {
      cwd: rc.workspace_path,
    });

    console.log("> PRE: requisites ✅ DONE");

  } catch (ex) {
    console.error(ex);
    throw new Error("failed to install Blank Source pre-requisites");
  }
};
