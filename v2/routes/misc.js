const express = require('express')
const { officeController, facilitiesController, culturalController , sportsController , indexController } = require('../controllers/misc')


const officeRouter = express.Router()
const facilitiesRouter = express.Router()
const culturalRouter = express.Router()
const indexRouter = express.Router()
const sportsRouter = express.Router()

officeRouter.route('/office').get(officeController)
facilitiesRouter.route('/facilities').get(facilitiesController)
culturalRouter.route('/cultural').get(culturalController)
sportsRouter.route('/sports').get(sportsController)
indexRouter.route('/').get(indexController)
indexRouter.route('/index').get(indexController)


module.exports = {officeRouter , facilitiesRouter , culturalRouter , sportsRouter , indexRouter}