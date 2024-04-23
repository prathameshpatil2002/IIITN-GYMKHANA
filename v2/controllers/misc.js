const Event = require('../models/Event')

const culturalController = (req,res) => {
    res.render('cultural')
}
const facilitiesController = (req,res) => {
    res.render('facilities')
}
const officeController = (req,res) => {
    res.render('office')
}

const sportsController = (req,res) => {
    res.render('sports')
}

const indexController = (req,res) =>{
    Event.find({club:'fests'})
        .then(result => res.render('index',{result}))
         .catch(err=>{throw err})
}

module.exports = {culturalController,facilitiesController,officeController,sportsController,indexController}