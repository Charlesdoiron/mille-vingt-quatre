const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/charlesdoiron/Sites/mille-vingt-quatre/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/Users/charlesdoiron/Sites/mille-vingt-quatre/src/templates/page.js"))),
  "component---src-templates-blogpost-js": hot(preferDefault(require("/Users/charlesdoiron/Sites/mille-vingt-quatre/src/templates/blogpost.js"))),
  "component---src-templates-project-js": hot(preferDefault(require("/Users/charlesdoiron/Sites/mille-vingt-quatre/src/templates/project.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/charlesdoiron/Sites/mille-vingt-quatre/src/pages/index.js")))
}

