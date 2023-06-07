module.exports = async (runner, args) => {
  try {
    console.log('> POST: Cleansing (API):');

    const rc = args.rc;
    await runner.execute(['rm -rf ./src/lib'], {
      cwd: args.workspacePath,
    });

    console.log('> POST: cleansing process ✅ DONE');
  } catch {
    throw new Error('Failed to clean API koa generators');
  }
};
