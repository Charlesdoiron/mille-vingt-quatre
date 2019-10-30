const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-page-js": hot(preferDefault(require("/Users/charlesdoiron/Sites/mille-vingt-quatre/src/templates/page.js"))),
  "component---src-templates-blogpost-js": hot(preferDefault(require("/Users/charlesdoiron/Sites/mille-vingt-quatre/src/templates/blogpost.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/charlesdoiron/Sites/mille-vingt-quatre/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/charlesdoiron/Sites/mille-vingt-quatre/src/pages/index.js")))
}

