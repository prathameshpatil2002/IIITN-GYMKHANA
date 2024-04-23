const express = require("express");

const festRouter = express.Router()
const festController = require('../controllers/fests')


festRouter.route('/').get(festController)

module.exports = festRouter