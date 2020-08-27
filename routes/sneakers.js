const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
var http = require('http')
const SneakersController = require('../controllers/sneakers.js')
router.use(bodyParser.urlencoded({ extended: false }))

// Get Request
router.get("/", SneakersController.sneakers_get_all);

// Post Request

// Delete Request

// Patch Request

module.exports = router;