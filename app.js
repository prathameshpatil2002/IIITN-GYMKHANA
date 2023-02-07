require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001;

const app = express();
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(bodyParser.json());

const index = require("./routes/index");
const contact = require("./routes/contact");
const fests = require("./routes/fests");
const facilities = require("./routes/facilities");
const office = require("./routes/office");
const sports = require("./routes/sports");
const cultural = require("./routes/cultural");
const loginpage = require("./routes/loginpage");
const ace = require("./routes/ace");
const probe = require("./routes/probe");
const orator = require("./routes/orator");

app.use('/', index)
app.use('/index',index)
app.use('/contact', contact)
app.use('/sports', sports)
app.use('/cultural', cultural)
app.use('/office', office)
app.use('/fests', fests)
app.use('/facilities', facilities)
app.use('/login',loginpage)
app.use('/ace',ace)
app.use('/probe',probe)
app.use('/orator',orator)


app.use(express.static(__dirname + '/views'));

app.listen(PORT, () => {
    console.log(`server is listening to http://localhost:${PORT}`);
}) 