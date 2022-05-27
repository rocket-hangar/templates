# Web development template

## Use this template

```sh
# create a workspace directory
npx copy-github-directory workspace my-project
cd my-project

# create an app
npx copy-github-directory web my-app

# add "my-app" to workspaces of package.json

# install
yarn

# start
cd my-app

# start
yarn run test
```

## Scripts

- `yarn run start` test your app
- `yarn run build` build your app
- `yarn run storybook` test your components
- `yarn run test` test with vitest