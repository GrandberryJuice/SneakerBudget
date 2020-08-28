const Sneaker = require("../models/sneakers.js")
const mongoose = require('mongoose')

exports.sneakers_get_all = (req, res, next) =>  { 
    Sneaker.find()
    .select("_id name release_date number photo")
    .exec()
    .then(doc => {
        const response = {
            count: docs.length,
            sneakers: doc.map(doc => {
                return {
                    name: doc.name,
                    release_date: doc.release_date,
                    number: doc.number,
                    photo: doc.photo,
                    request: {
                        type: "GET",
                        url: "https://sneaker-budget.herokuapp.com/sneakers/"
                    }
                }
            })
        };

        res.status(200).json(response);
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    })
}