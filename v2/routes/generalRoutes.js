const express = require('express')
const { officeController, facilitiesController, culturalController } = require('../controllers/generalController')


const officeRouter = express.Router()
const facilitiesRouter = express.Router()
const culturalRouter = express.Router()

officeRouter.route('/office').get(officeController)
facilitiesRouter.route('/facilities').get(facilitiesController)
culturalRouter.route('/cultural').get(culturalController)
