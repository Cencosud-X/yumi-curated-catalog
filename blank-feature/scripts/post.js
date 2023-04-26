module.exports = async (runner, args) => {
  try {
    console.log('> POST: Cleansing:');

    /*
    const rc = args.rc;
    await runner.execute([
      'rm -rf ./src/lib'
    ], {
      cwd: args.workspacePath
    })
    */

    console.log('> POST: cleansing process ✅ DONE');


  } catch (ex) {
    console.error(ex);
    throw new Error('Failed to clean');
  }
}
