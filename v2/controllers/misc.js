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

const indexController = (req,res) =>{
    Event.find({club:'fest'})
        .then(fests => res.render('index',{fests}))
         .catch(err=>{throw err})
}

module.exports = {culturalController,facilitiesController,officeController,indexController}