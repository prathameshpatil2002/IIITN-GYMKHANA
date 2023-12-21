const Feedback = require('../models/Feedback')


const getFeedBackPage = (req,res) =>{
    res.send('contact')
}

const storeFeedBackFormData = async (req,res) =>{
    try{

        const { name , email , contact , text} = req.body

        const data = await Feedback.create({
            name:name,
            email:email,
            contact:contact,
            text:text,
        })

         res.redirect('/');

    }catch(err){
         res.redirect('/');
        throw err
    }
}

module.exports = {getFeedBackPage , storeFeedBackFormData}