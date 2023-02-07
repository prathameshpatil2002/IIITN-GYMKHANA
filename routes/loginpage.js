const bodyParser = require('body-parser')
const express = require('express')
const MongoClient = require('mongodb').MongoClient;

const url = process.env.MONGO_URI;

var isLoggedIn = 0;

const router = express.Router();


router.use(bodyParser.urlencoded({
   extended: true
}));

router.use(bodyParser.json());

router.get('/',(req,res,next)=>{
    res.render('loginpage')
});

router.post('/admin',(req,res,next)=>{
    MongoClient.connect(url , (err,db)=>{
       if(err){
           throw err;
       }
       const dbo = db.db('iiitn_gymkhana');

       const obj = {
           username: req.body.username,
           password: req.body.password
       }
      
       const query = {username : obj.username, password:obj.password}
       dbo.collection('LoginDetails').find(query).toArray((err,result)=>{
           if(err){
                throw err
           };
           if(result.length==0){
                res.redirect('/login')
           }
          else{
                isLoggedIn = 1
                res.redirect('/login/admin/events')
          }
           
           db.close();
       })
      
   })
})

router.get('/admin/events',(req,res,next)=>{
    if(isLoggedIn){
       
        res.render('clubInfo',{code : isLoggedIn})
    }
    else{
        res.redirect('/login')
    }
})

router.post('/admin/events',(req,res,next)=>{
    MongoClient.connect(url , (err,db)=>{
       if(err){
           throw err;
       }
       const dbo = db.db('iiitn_gymkhana');

       const obj = {
           name: req.body.name,
           club: req.body.society,
           startDate: req.body.startDate,
           endDate: req.body.endDate
       }
      
       dbo.collection('Eventdata').insertOne(obj,(err,result)=>{
           if(err){
                throw err;
           };
           
            db.close();
       })
      
   })
   isLoggedIn = 1
   res.redirect('/login/admin/events');
})

router.get('/admin/logout',(req,res,next)=>{
    isLoggedIn = 0;
    res.redirect('/');
})


module.exports = router
