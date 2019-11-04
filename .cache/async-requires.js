// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-page-js": () => import("../src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---src-templates-blogpost-js": () => import("../src/templates/blogpost.js" /* webpackChunkName: "component---src-templates-blogpost-js" */),
  "component---src-templates-project-js": () => import("../src/templates/project.js" /* webpackChunkName: "component---src-templates-project-js" */),
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

