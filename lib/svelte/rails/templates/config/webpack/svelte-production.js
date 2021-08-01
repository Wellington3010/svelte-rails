process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./svelte-environment')

module.exports = environment.map(x => x.toWebpackConfig())
