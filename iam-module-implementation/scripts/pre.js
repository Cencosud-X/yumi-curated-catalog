const path = require('path');
const fs = require('fs');
const readline = require('readline');

const toPascalCase = (str) => {
  return str
    .replace(/[_\s-]/gi, '|') // remove all spaces , - and _ and replace for a |
    .split('|') // split phrase by |
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1)) // Capitalize each fragment
    .join(''); // Join into a single word with all together ^^
};

module.exports = async (runner, args) => {
  try {
    console.log('> PRE: Installing prerequisites (API):');

    const rc = args.rc;
    await runner.execute(
      [
        `npx nx g @nrwl/react:lib ${rc.path}`,
        'npm install react@^16.14.0',
        'npm install react-dom@^16.14.0',
        'npm install react-router-dom@^5.3.0',
        'npm install @awesome-cordova-plugins/in-app-browser@^6.3.0',
        'npm install @team_yumi/sdk@0.0.1-next.20230707-6e2cfb1-d6dab37be5f3fc0e3775695bfd8e6bfc',
        'npm install @team_yumi/ramen@0.0.3-next.1688753932673',
      ],
      {
        cwd: rc.workspace_path,
      }
    );

    /*
      WE NEED TO DO THE FOLLOWING FLOW
        - We need to get the App.tsx which is inside the following path
          /apps/www/src/app/App.tsx

        - An option to configure the app.tsx file, will be override the YUMI_MAIN_FILE_PATH
        in the seki product settings
    */

    const workspacePath = rc.workspace_path;

    // Get the YUMI Setting from seki settings.json
    const settingsJSONPath = path.join(workspacePath, '.seki', 'settings.json');
    const settingsJSON = JSON.parse(fs.readFileSync(settingsJSONPath, 'utf8'));

    const YUMI_MAIN_FILE_PATH = settingsJSON['meta_data']['YUMI_MAIN_FILE_PATH'];

    // Get the npmScope from nx.json (we need this variable to "build" the import path)
    const nxPath = path.join(workspacePath, 'nx.json');
    const nxJSON = JSON.parse(fs.readFileSync(nxPath, 'utf8'));
    const npmScope = nxJSON.npmScope;

    // Get the App.tsx file path for start the injection process
    const appTsxPathToInject = path.join(workspacePath, YUMI_MAIN_FILE_PATH);

    if (!fs.existsSync(appTsxPathToInject)) {
      console.warn('THE INJECTION PROCCESS DOESNT OCCURRS BECAUSE THE App.tsx WASNT FOUND');
      console.warn(`> ${appTsxPathToInject}`);
      return;
    }

    /*
      - if the file exists (App.tsx), we need to inject the module implementation,
    */
    const moduleOverrideName = `${toPascalCase(rc.name)}OverrideModule`;
    const modifiedAppTsx = [];

    // Read the original App.tsx to find the "special keywords"
    var lineReader = readline.createInterface({ input: fs.createReadStream(appTsxPathToInject) });

    lineReader.on('line', function (line) {
      /*
        We need to put a "keyword inside the App.tsx" which pattern is:
          // END_YUMMI_IMPORT_INJECTION (DONT REMOVE THIS COMMENT) <-- we need to get this line!
        In this "part" we need to put the IMPORT clause
      */
      if (line.indexOf('END_YUMMI_IMPORT_INJECTION') >= 0) {
        modifiedAppTsx.push(`import {${moduleOverrideName}} from '@${npmScope}/${rc.path}'`);
      }

      /*
        We need to put a "keyword inside the App.tsx" which pattern is:
        {END_YUMMI_ROUTE_INJECTION (DONT REMOVE THIS COMMENT)/} <-- we need to get this line!
        In this "part" we need to put the ROUTE clause
      */
      if (line.indexOf('END_YUMMI_ROUTE_INJECTION') >= 0) {
        modifiedAppTsx.push(
          `<Route path={${moduleOverrideName}.route} component={${moduleOverrideName}} />`
        );
      }

      modifiedAppTsx.push(line);
    });

    lineReader.on('close', function () {
      fs.writeFileSync(appTsxPathToInject, modifiedAppTsx.join('\n'));
    });

    console.log('> PRE: requisites ✅ DONE');
  } catch (ex) {
    console.error(ex);
    throw new Error('failed to execute pre script');
  }
};
