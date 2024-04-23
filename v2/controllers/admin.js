const Event = require('../models/Event')
const Admin = require('../models/Admin')

const bcrypt = require('bcrypt')
const { response } = require('express')

const loginPageRender = (req,res) => {
    res.render('loginpage')
}

const adminLogin = async (req,res) => {
    try{
        const { username , password } = req.body;
         if(!username || !password){
            res.redirect('/admin')
        }

        const admin = await Admin.findOne({username : username});

        const validAdmin = await bcrypt.compare(password,admin.password);

        const salt = await bcrypt.genSalt(10);
        const hashedUserName = await bcrypt.hash(username,salt);

        res.redirect(`/admin/events?admin=${username}&auth=${hashedUserName}`)


    }catch(err){
        console.log(err)
         res.redirect('/admin')
    }
}

const getEvents = async (req,res) => {
    try{
        const {admin,auth} = req.query;

        if(admin && auth){
            const user = await Admin.findOne({username:admin});

            const valid = await bcrypt.compare(admin,auth);
            
            if(valid){
                res.render('clubInfo',{code:1})
            }
        }
    }catch(err){
        console.log(err)
        res.redirect('/admin')
    }
   

}

const addEvents = async (req,res)=>{
    try{

        const { name , society , startDate , endDate} = req.body

        const event = await Event.create({
            name:name,
            club:society,
            startDate:startDate,
            endDate:endDate,
        })

        res.status(200).json({message:'Event Created',data:event})

    }catch(err){
        res.status(400).json({message:'Event not Created',error:err})
    }
}

const adminRegister = async (req,res) => {
    try{
        const { username , password } = req.body;

        if(!username || !password){
            return res.status(400).json('Username or Password Not Provided For Registration')
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password,salt);

        const newAdmin = await Admin.create({
            username:username,
            password:hashedPassword
        })

        return res.status(200).json({message:'New Admin Saved',data:newAdmin})
    }
    catch(err){
        return res.status(400).json({message:'New Admin not Saved',error:err})
    }

}

const adminLogout = (req,res) =>{
    res.redirect('/logout')
}


module.exports = { loginPageRender , addEvents , adminLogin , adminLogout , adminRegister , getEvents }