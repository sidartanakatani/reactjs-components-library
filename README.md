# ReactJS Components Library Starter Project

### Prerequisites

-   [Node.js (Must be v16)](https://nodejs.org)
-   [Yarn](https://classic.yarnpkg.com/)
-   [AWS CLI](https://aws.amazon.com/pt/cli/)

### Commands

Run `yarn` first to install package dependencies.

-   `yarn lint` - Run the StandardJS linter to check for warnings and errors
-   `yarn build` - Build the component library to the _dist_ folder
-   `yarn test` - Run the Jest testing suite to verify that the components will behave correctly
-   `yarn sb` - Run the storybook server for component visualization
-   `yarn sb:build` - Build a static storybook site to the _storybook-static_ folder
-   `yarn prepare` - Authenticate to AWS
-   `npm publish` - Publish the library to AWS Code Artifact

### AWS Code Artifact Scripts

Add this 2 scripts in the package.json and configure accordingly

-   "prepare": "npm run co:login",
-   "co:login": "aws codeartifact login --tool npm --repository repository-name --domain domain --domain-owner domain-owner"
