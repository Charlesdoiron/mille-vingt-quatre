const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/charle.doiron/Documents/Github/mille-vingt-quatre/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/Users/charle.doiron/Documents/Github/mille-vingt-quatre/src/templates/Page.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/charle.doiron/Documents/Github/mille-vingt-quatre/src/templates/BlogPost.js"))),
  "component---src-templates-project-js": hot(preferDefault(require("/Users/charle.doiron/Documents/Github/mille-vingt-quatre/src/templates/Project.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/charle.doiron/Documents/Github/mille-vingt-quatre/src/pages/index.js")))
}

