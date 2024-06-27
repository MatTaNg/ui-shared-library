# How to publish a new version

1. Go to package.json and increment the version number
   - You will get a 403 if you do not do this
2. Do a rollup -c
   - This will publish the repo as an npm module
3. Push your changes to the main branch
4. Use 'npm login' to Log into artifactory. Use the credentials inside '.npmrc' (If this doesn't work, use the URL inside .npmrc to login manually)
5. Do a npm publish
   - This will publish your changes into artifactory so other repos can use it

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
