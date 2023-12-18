const express = require("express");

const router = express.Router()
const clubsController = require('../controllers/clubsController')


router.route('/ace').get(clubsController.aceController)
router.route('/orator').get(clubsController.oratorController)
router.route('/probe').get(clubsController.probeController)