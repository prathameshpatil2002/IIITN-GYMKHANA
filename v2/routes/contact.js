const express = require("express");
const { getFeedBackPage , storeFeedBackFormData } = require('../controllers/contact')

const contactRouter = express.Router()

contactRouter.route('/').get(getFeedBackPage)
                        .post(storeFeedBackFormData)

module.exports = contactRouter