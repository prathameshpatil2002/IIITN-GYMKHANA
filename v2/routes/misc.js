const express = require('express')
const { officeController, facilitiesController, culturalController , indexController } = require('../controllers/misc')


const officeRouter = express.Router()
const facilitiesRouter = express.Router()
const culturalRouter = express.Router()
const indexRouter = express.Router()

officeRouter.route('/office').get(officeController)
facilitiesRouter.route('/facilities').get(facilitiesController)
culturalRouter.route('/cultural').get(culturalController)
indexRouter.route('/').get(indexController)
indexRouter.route('/index').get(indexController)

