// ./cypress/plugins/index.ts
const injectDevServer = require('@cypress/react/plugins/next')

module.exports = (on, config) => {
  injectDevServer(on, config)
  return config
}