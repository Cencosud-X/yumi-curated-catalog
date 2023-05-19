module.exports = async (runner, args) => {
  try {
    console.log("> PRE: Installing prerequisites:");
    console.debug(args);

    /*
    const rc = args.rc;

    const commands = [
      `nx g @nrwl/react:lib ${rc.path} --buildable`,
      'rm -rf ./.custom'
    ];
    await runner.execute(commands, {
      cwd: rc.workspace_path,
    });
    */

    console.log("> PRE: Requisites ✅ DONE");

  } catch (ex) {
    console.error(ex);
    throw new Error("Failed to execute the pre script");
  }
};
