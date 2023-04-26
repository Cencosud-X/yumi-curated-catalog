module.exports = async (runner, args) => {
  try {
    console.log("> PRE: Installing prerequisites:");

    const rc = args.rc;
    await runner.execute(
      [
        `npx nx g @nrwl/react:lib ${rc.path}`
      ],
      {
        cwd: rc.workspace_path
      }
    );

  } catch (ex) {
    console.error(ex);
    throw new Error("failed to execute pre script");
  }
};
