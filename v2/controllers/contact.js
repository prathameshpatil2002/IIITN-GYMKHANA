const Feedback = require('../models/Feedback')


const getFeedBackPage = (req,res) =>{
    res.render('contact')
}

const storeFeedBackFormData = async (req,res) =>{
    try{

        const { name , email , contact , feedback} = req.body

        const data = await Feedback.create({
            name:name,
            email:email,
            contact:contact,
            text:feedback,
        })

         res.redirect('/contact');

    }catch(err){
         res.redirect('/contact');
        throw err
    }
}

module.exports = {getFeedBackPage , storeFeedBackFormData}