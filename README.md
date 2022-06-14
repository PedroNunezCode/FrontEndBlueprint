# Simple blueprint for a React-Redux frontend project.
### The following is a list of the tech I use when starting a project. Made this to make it easier to start a new project :) Hope it helps you.


- React - [Docs](https://reactjs.org/){:target="_blank" rel="noopener"}
- React-Redux (Toolkit) - [Docs](https://redux-toolkit.js.org/introduction/getting-started){:target="_blank" rel="noopener"}
- SASS - [Docs](https://sass-lang.com/){:target="_blank" rel="noopener"}
- Babel - [Docs](https://babeljs.io/setup#installation){:target="_blank" rel="noopener"}
- Webpack - [Docs](https://webpack.js.org/concepts/){:target="_blank" rel="noopener"}
- All the css loaders required to run.

I also tried to create a decent project structure so if anybody uses this,  you can easily navigate through the project and make additions.
## Installation (Local)
This repo requires [Node.js](https://nodejs.org/){:target="_blank" rel="noopener"}
1. Clone the repo
2. Remove git history. This will allow you to add your own [repo](https://www.digitalocean.com/community/tutorials/how-to-push-an-existing-project-to-github){:target="_blank" rel="noopener"}
3. Install Dependencies
4. Run local server (will open up browser tab)

```sh
git clone https://github.com/PedroNunezCode/FrontEndBlueprint.git customNameHere
cd FrontEndBlueprint
rm -rf .git
npm install
npm run start
```
## Compilation (Production)
I also added a script that will create a static directory containing everything compiled for production.
```sh
npm install
npm run build
```

This will create a directory called **dist** from there you can connect it to Apache/nginx. You can chage the behavior of this script inside the webpack.config.js file. Starting line 8.