const express = require("express");

const router = express.Router()
const festController = require('../controllers/fests')


router.route('/').get(festController)