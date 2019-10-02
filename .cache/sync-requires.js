const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-page-js": hot(preferDefault(require("/Sites/mille-vingt-quatre/src/templates/Page.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Sites/mille-vingt-quatre/src/templates/BlogPost.js"))),
  "component---src-templates-project-js": hot(preferDefault(require("/Sites/mille-vingt-quatre/src/templates/Project.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Sites/mille-vingt-quatre/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Sites/mille-vingt-quatre/src/pages/index.js")))
}

