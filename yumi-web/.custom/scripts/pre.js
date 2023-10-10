module.exports = async (runner, args) => {
  try {
    console.log('> PRE: Installing prerequisites (WEB):');

    const rc = args.rc;
    await runner.execute([
      'npm install -D @nrwl/web@14.4.3',
      'npm install -D webpack-merge',
      'npm install -S react-router-dom@^5.3.4',
      'npm install -S react-router@^5.2.0',
      'npm install -S react-dom@^16.14.0',
      'npm install -S react@^16.14.0',
      `npx nx g @nrwl/web:app ${rc.path} --unitTestRunner=jest --e2eTestRunner=none`
    ], {
      cwd: rc.workspace_path
    })

    console.log('> PRE: requisites ✅ DONE')

  } catch (ex) {
    console.error(ex);
    throw new Error('failed to install web pre-requisites');
  }
}