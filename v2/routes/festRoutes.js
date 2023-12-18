const express = require("express");

const router = express.Router()
const festController = require('../controllers/festsController')


router.route('/').get(festController)