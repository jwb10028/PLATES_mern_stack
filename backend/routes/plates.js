
const express = require('express')
const Plate = require('../models/plate_model')
const { 
    createPlate,
    getPlates,
    getPlate,
    deletePlate,
    updatePlate 
} = require('../controllers/plateController')
const router = express.Router()

//GET all plate
router.get('/', getPlates)

//GET single plate
router.get('/:id', getPlate)

//POST new plate
router.post('/', createPlate)

//DELETE plate
router.delete('/:id', deletePlate)

//UPDATE plate
router.patch('/:id', updatePlate)











//export module
module.exports = router