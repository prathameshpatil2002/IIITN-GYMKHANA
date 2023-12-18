

const culturalController = (req,res) => {
    res.render('cultural')
}
const facilitiesController = (req,res) => {
    res.render('facilities')
}
const officeController = (req,res) => {
    res.render('office')
}

module.exports = {culturalController,facilitiesController,officeController}