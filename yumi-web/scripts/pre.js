const path = require('path')
const {
  requiredVersions: REQUIRED_VERSIONS,
  defaultVersions: DEFAULT_VERSIONS,
  scripts: SCRIPTS,
  dependencies: DEPENDENCIES,
  defaultErrorDependencyMessage: DEFAULT_ERROR_DEPENDENCY_MESSAGE
} = require('../config.json')

const getMajor = (version) => {
  const [major] = version
    .replace(/[^0-9.]/g, '')
    .split('.')

  return Number(major)
}

const verifyVersions = (rc) => {
  const packageJsonPath = path.join(rc.workspace_path, 'package.json')
  const packageDependencies = require(packageJsonPath).dependencies
  const packageDevDependencies = require(packageJsonPath).devDependencies
  const dependencyErrors = []

  const dynamicScripts = DEPENDENCIES.map((dependency) => {
    const version = packageDependencies[dependency] || packageDevDependencies[dependency]

    if (version) {
      const major = getMajor(version)

      if (major !== REQUIRED_VERSIONS[dependency]) {
        dependencyErrors.push(
          DEFAULT_ERROR_DEPENDENCY_MESSAGE
            .replace('<dependency>', dependency)
            .replace('<requiredVersion>', REQUIRED_VERSIONS[dependency])
        )
        return
      }
    } else {
      return `${SCRIPTS[dependency]}${DEFAULT_VERSIONS[dependency]}`
    }
  })

  return { dynamicScripts, dependencyErrors }
}

module.exports = async (runner, args) => {
  try {
    console.log('> PRE: Installing prerequisites (WEB):');
    const rc = args.rc;

    const defaultScripts = [
      'npm install -D webpack-merge',
      `npx nx g @nrwl/web:app ${rc.path} --unitTestRunner=jest --e2eTestRunner=none`
    ]

    const { dynamicScripts, dependencyErrors } = verifyVersions(rc).filter(Boolean)

    if (dependencyErrors.length) {
      throw new Error(dependencyErrors)
    }

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
