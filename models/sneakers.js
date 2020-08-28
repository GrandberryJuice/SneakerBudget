const mongoose = require('mongoose');

let sneakerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    release_date: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Sneaker', sneakerSchema)