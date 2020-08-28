const mongoose = require('mongoose')
const config = require("./config/index.js")
const express = require('express')

function connnectToDatabase(config) {
    console.log(config.mongoURL)
    mongoose.connect('mongodb://kennygrandberryjr:Airheadz89#7@ds129394.mlab.com:29394/heroku_zshb8d99', { useNewUrlParser: true })
    // let db = mongoose.createConnection(config.mongoURL)
    mongoose.connection.once('open', function() { 
        // All OK - fire (emit) a ready event. 
       console.log("Were connected")
    });

    return mongoose
}

module.exports.connnectToDatabase = connnectToDatabase 