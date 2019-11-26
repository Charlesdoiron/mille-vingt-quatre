const contentful = require("contentful")

const defaultConfig = {
  CTF_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
  CTF_CDA_TOKEN: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
  CTF_CPA_TOKEN: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
}

module.exports = {
  createClient(config = defaultConfig) {
    //preview environment
    //using the contentful preview api
    const options = {
      host: "preview.contentful.com",
      space: config.CTF_SPACE_ID,
      accessToken: config.CTF_CPA_TOKEN,
    }
    //production environment
    //using the contentful delivery api
    if (process.env.NODE_ENV === "production") {
      options.host = "cdn.contentful.com"
      options.accessToken = config.CTF_CDA_TOKEN
    }
    return contentful.createClient(options)
  },
}

client.getEntries().then(response => console.log("response", response))
