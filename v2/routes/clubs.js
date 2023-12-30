const express = require("express");

const probeRouter = express.Router()
const aceRouter = express.Router()
const oratorRouter = express.Router()
const clubsController = require('../controllers/clubs')


aceRouter.route('/').get(clubsController.aceController)
oratorRouter.route('/').get(clubsController.oratorController)
probeRouter.route('/').get(clubsController.probeController)

module.exports = {aceRouter , oratorRouter , probeRouter}