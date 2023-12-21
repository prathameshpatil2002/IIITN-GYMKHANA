const express = require("express");

const { addEvents , adminLogin , adminLogout , adminRegister , getEvents , loginPageRender } = require('../controllers/admin')


const adminRouter = express.Router()

adminRouter.route('/').get(loginPageRender)
adminRouter.route('/').post(adminLogin)
adminRouter.route('/register').post(adminRegister)
adminRouter.route('/events').get(getEvents)
adminRouter.route('/events').post(addEvents)
adminRouter.route('/logout').get(adminLogout)

module.exports = adminRouter