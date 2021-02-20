
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');

const auth = require('./routes/auth')

const app = express();
app.use(bodyparser.json()); //Agregar plugins a express
app.use(cors()) //Agregar plugin a express

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true}) //!Conectarse a mongo db

app.use('/api/auth',auth)

module.exports = app


//CCTT-57NC-A383