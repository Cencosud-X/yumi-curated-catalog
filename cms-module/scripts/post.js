module.exports = async (runner, args) => {
  try {
    console.log('> POST: Cleansing (WEB):');
    const { rc } = args

    const scripts = [
      /* 'rm -rf ./src/app', */
      'rm -rf ./src/test-setup.ts',
      'rm -rf ./browserslist',
      'rm -rf ./favicon.ico',
      'rm -rf ./src/favicon.ico',
      'rm -rf ./src/main.ts',
      'rm -rf ./src/styles.css',
      //'rm -rf ./src/assets',
      'rm -rf ./src/environments',
    ]

    !rc.settings.flow && scripts.push(`rm -rf ./src/flow.tsx`)

    await runner.execute(
      scripts,
      {
        cwd: args.workspacePath,
      }
    );

    console.log('> POST: cleansing process ✅ DONE');
  } catch {
    throw new Error('Failed to clean WEB generators');
  }
};
