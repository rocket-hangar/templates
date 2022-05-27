# Multi-package development template

## Use this template

```sh
# create a workspace directory
npx copy-github-directory workspace my-project
cd my-project

# create an app
npx copy-github-directory packages my-packages

# add "my-packages" to workspaces of package.json

# install
yarn

# start
cd my-packages

# start
yarn run test
```

## Scripts

- `yarn run build` build your packages
- `yarn run publish` publish your packages to npm registry
- `yarn run view` view your remote information of packages
- `yarn run doctor` check configs is validated for rocket-punch
- `yarn run test` test with vitest

## Start development

1. Change the directory name `src/@org/package` to you want.
2. Update `.packages.json` file.
