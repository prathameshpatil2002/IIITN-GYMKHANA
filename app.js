require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')

const PORT = process.env.PORT || 3001;


const app = express();
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(bodyParser.json());
app.use(morgan('tiny'))

mongoose.connect(
    process.env.DB
);

const miscRoutes = require('./v2/routes/misc')
const festsRoutes = require('./v2/routes/fests')
const clubsRoutes = require('./v2/routes/clubs')
const adminRoutes = require('./v2/routes/admin')
const contactRoutes = require('./v2/routes/contact');

app.use('/', miscRoutes.indexRouter)
app.use('/cultural', miscRoutes.culturalRouter)
app.use('/office', miscRoutes.officeRouter)
app.use('/fests', festsRoutes)
app.use('/facilities', miscRoutes.facilitiesRouter)
app.use('/admin',adminRoutes)
app.use('/orator',clubsRoutes.oratorRouter)
app.use('/probe',clubsRoutes.probeRouter)
app.use('/ace',clubsRoutes.aceRouter)
app.use('/contact',contactRoutes)
app.use('/sports',miscRoutes.sportsRouter)


app.use(express.static(__dirname + '/views'));

app.listen(PORT, () => {
    console.log(`server is listening to http://localhost:${PORT}`);
}) 