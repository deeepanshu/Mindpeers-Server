const express = require('express');
const bodyParser = require('body-parser');
const morgan  = require('morgan');
const credentials = require('./config/credentials');

const app = express();


app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(credentials.PORT, ()=> {
    console.log(`Server started at ${credentials.PORT}`)
})