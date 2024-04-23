const Event = require('../models/Event')


const aceController = (req,res) => {
   Event.find({club:'ace'})
   .then(result =>
       res.render('clubs/ace',{result})
   )
   .catch(err=>{throw err})
}

const probeController = (req,res) => {
   Event.find({club:'probe'})
   .then(result =>
       res.render('clubs/probe',{result})
   )
   .catch(err=>{throw err})
}

const oratorController = (req,res) => {
   Event.find({club:'orator'})
   .then(result =>
       res.render('clubs/orator',{result})
   )
   .catch(err=>{throw err})
}

module.exports = {aceController,oratorController,probeController}