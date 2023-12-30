const express = require('express')
const { officeController, facilitiesController, culturalController , sportsController , indexController } = require('../controllers/misc')


const officeRouter = express.Router()
const facilitiesRouter = express.Router()
const culturalRouter = express.Router()
const indexRouter = express.Router()
const sportsRouter = express.Router()

officeRouter.route('/').get(officeController)
facilitiesRouter.route('/').get(facilitiesController)
culturalRouter.route('/').get(culturalController)
sportsRouter.route('/').get(sportsController)
indexRouter.route('/').get(indexController)
indexRouter.route('/').get(indexController)


module.exports = {officeRouter , facilitiesRouter , culturalRouter , sportsRouter , indexRouter}