const express = require("express");

const clubsRouter = express.Router()
const clubsController = require('../controllers/clubs')


clubsRouter.route('/ace').get(clubsController.aceController)
clubsRouter.route('/orator').get(clubsController.oratorController)
clubsRouter.route('/probe').get(clubsController.probeController)

module.exports = clubsRouter