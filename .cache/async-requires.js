// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-page-js": () => import("/Users/charlesdoiron/Sites/mille-vingt-quatre/src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---src-templates-blogpost-js": () => import("/Users/charlesdoiron/Sites/mille-vingt-quatre/src/templates/blogpost.js" /* webpackChunkName: "component---src-templates-blogpost-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/charlesdoiron/Sites/mille-vingt-quatre/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("/Users/charlesdoiron/Sites/mille-vingt-quatre/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

