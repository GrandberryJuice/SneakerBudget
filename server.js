const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true })

const app = express()

// config
const config = require('./config/index.js')

// Routes
const sneakers = require('./routes/sneakers.js')

app.use(bodyParser.json({ limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true,limit: '50mb' }));

app.use('/sneakers', sneakers)
app.use((req,res, next) => {
    const error = new Error('Not an available Request. This request was not found');
    err.status = 404;
    next(error);
})

app.use((error,req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

app.listen(config.server)