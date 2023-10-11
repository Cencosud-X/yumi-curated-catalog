const path = require('path')

const REQUIRED_VERSIONS = {
  'react-dom': 16,
  'react-router-dom': 5,
  'react-router': 5,
  nx: 14,
  react: 16
}

const DEFAULT_VERSIONS = {
  'react-dom': '^16.14.0',
  'react-router-dom': '^5.3.4',
  'react-router': '^5.2.0',
  nx: '14.4.2',
  react: '^16.14.0'
}

const getMajor = (version) => {
  const [major] = version
    .replace(/[^0-9.]/g, '')
    .split('.')

  return Number(major)
}

const SCRIPTS = {
  'react-dom': 'npm install -S react-dom@',
  'react-router-dom': 'npm install -S react-router-dom@',
  'react-router': 'npm install -S react-router@',
  nx: 'npm install -D @nrwl/web@',
  react: 'npm install -S react@',
}

const verifyVersions = (rc) => {
  const dependencies = ['react-router-dom', 'react-router', 'react-dom', 'react', 'nx']
  const packageJsonPath = path.join(rc.workspace_path, 'package.json')
  const packageDependencies = require(packageJsonPath).dependencies
  const packageDevDependencies = require(packageJsonPath).devDependencies

  const scripts = dependencies.map((dependency) => {
    const version = packageDependencies[dependency] || packageDevDependencies[dependency]

    if (version) {
      const major = getMajor(version)

      if (major !== REQUIRED_VERSIONS[dependency]) {
        throw new Error(`Must have a ${dependency} version ${REQUIRED_VERSIONS[dependency]}.x.x`)
      }

      if (version !== DEFAULT_VERSIONS[dependency]) {
        return `${SCRIPTS[dependency]}${version}`
      }
    } else {
      return `${SCRIPTS[dependency]}${DEFAULT_VERSIONS[dependency]}`
    }
  })

  return scripts
}

module.exports = async (runner, args) => {
  try {
    console.log('> PRE: Installing prerequisites (WEB):');
    const rc = args.rc;

    const defaultScripts = [
      'npm install -D webpack-merge',
      `npx nx g @nrwl/web:app ${rc.path} --unitTestRunner=jest --e2eTestRunner=none`
    ]

    const dynamicScripts = verifyVersions(rc).filter(Boolean)
    const scripts = [...dynamicScripts, ...defaultScripts]

    await runner.execute(scripts, {
      cwd: rc.workspace_path
    })

    console.log('> PRE: requisites ✅ DONE')

  } catch (ex) {
    console.error(ex);
    throw new Error('failed to install web pre-requisites');
  }
}
