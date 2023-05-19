module.exports = async (runner, args) => {
  try {
    console.log('> POST: Cleansing (Blank Source):');

    await runner.execute([
      'rm -rf ./src/lib'
    ], {
      cwd: args.workspacePath
    })

    console.log('> POST: cleansing process ✅ DONE');

  } catch(ex) {
    console.error(ex);
    throw new Error('Failed to clean Blank Source');
  }
}
