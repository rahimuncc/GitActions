const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require("./config/mongoose");
//create logs
require("./config/logger");

require('dotenv').config();

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


//use express routes
app.use('/', require('./routes'));

//Start the Server
app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(`error is : ${err}`);
    }
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})