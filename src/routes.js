const express = require('express')

const LinkController = require('./controllers/LinkController')

const routes = new express.Router()

routes.post('/main', LinkController.show)

module.exports = routes