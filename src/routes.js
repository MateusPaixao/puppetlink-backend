const express = require('express')

const LinkController = require('./controllers/LinkController')

const routes = new express.Router()

routes.post('/main', LinkController.store)

module.exports = routes