module.exports = async (runner, args) => {
  try {
    console.log("> PRE: Installing prerequisites (API):");

    const rc = args.rc;
    await runner.execute(
      [
        `nx g @nrwl/react:lib ${rc.path}`,
        'npm install @ionic/react@^5.8.3',
        'npm install @ionic/react-router@^5.8.3',
        'npm install react@^17.0.2',
        'npm install react-dom@^17.0.2',
        'npm install react-router-dom@^5.3.0',
      ],
      {
        cwd: rc.workspace_path,
      }
    );

    console.log("> PRE: requisites ✅ DONE");
  } catch {
    console.error(ex);
    throw new Error("failed to install api pre-requisites");
  }
};
