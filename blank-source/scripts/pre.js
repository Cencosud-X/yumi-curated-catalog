module.exports = async (runner, args) => {
  try {
    console.log("> PRE: Installing prerequisites (Source):");

    const rc = args.rc;
    
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
    throw new Error("failed to install Blank Source pre-requisites");
  }
};
