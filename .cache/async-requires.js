// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-page-js": () => import("/Sites/mille-vingt-quatre/src/templates/Page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---src-templates-blog-post-js": () => import("/Sites/mille-vingt-quatre/src/templates/BlogPost.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-templates-project-js": () => import("/Sites/mille-vingt-quatre/src/templates/Project.js" /* webpackChunkName: "component---src-templates-project-js" */),
  "component---cache-dev-404-page-js": () => import("/Sites/mille-vingt-quatre/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("/Sites/mille-vingt-quatre/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

