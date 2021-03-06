'use strict'

// Dependencies
// ===

const BodyParser = require('body-parser')

// web server
const Express = require('express')

// const Querystring = require("querystring")

// See config/
const Config = require('config')

// Local libs
// ===
const Util = require('./lib/util.js')

// App
// ===

const app = Express()
app.disable('x-powered-by')
app.use(BodyParser.text({type: '*/*'}))
if (Config.logLevel === 'debug') {
  app.use(Util.debugLogger)
}

const UsersRouter = require('./users.js')
app.use('/', UsersRouter)

app.listen(Config.port)

Util.logger.info(`NODE_ENV: ${Config.util.getEnv('NODE_ENV')}`)
Util.logger.info(`sync server up on localhost:${Config.port}`)
