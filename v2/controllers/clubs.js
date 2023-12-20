const Event = require('../models/Event')


const aceController = (req,res) => {
   Event.find({club:'ace'})
   .then(events =>
       res.render('clubs/ace',{events})
   )
   .catch(err=>{throw err})
}

const probeController = (req,res) => {
   Event.find({club:'probe'})
   .then(events =>
       res.render('clubs/probe',{events})
   )
   .catch(err=>{throw err})
}

const oratorController = (req,res) => {
   Event.find({club:'orator'})
   .then(events =>
       res.render('clubs/orator',{events})
   )
   .catch(err=>{throw err})
}

module.exports = {aceController,oratorController,probeController}