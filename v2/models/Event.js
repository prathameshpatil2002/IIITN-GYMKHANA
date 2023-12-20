const {Schema,model} = require("mongoose");

const EventSchema = new Schema({
    name : {
        type : String,
        required : [true,"Event Name is required"]
    },
    club : {
        type: String,
        required : [true,"Club Name is required"]
    },
    startDate : {
        type: Date,
        required : [true,"Start date is required"]
    },
    endDate : {
       type: Date,
        required : [true,"End date is required"]
    },
   
},{timestamps:true});

const Event = model('Event',EventSchema);

module.exports = Event;