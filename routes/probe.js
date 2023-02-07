const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_URI;

const router = express.Router();

router.get('/',(req,res,next)=>{
    MongoClient.connect(url , (err,db)=>{
       if(err){
           throw err;
       }
       const dbo = db.db('iiitn_gymkhana');
       const query = {club: "probe"}
       dbo.collection('Eventdata').find(query).toArray((err,result)=>{
           if(err) throw err;

           
           res.render('clubs/probe',{result});
           db.close();
       }) 
   })
});

module.exports = router