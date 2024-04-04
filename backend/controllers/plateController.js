const Plate = require('../models/plate_model')
const mongoose = require('mongoose')

//GET all plates
const getPlates = async (req, res) => {
    const plates = await Plate.find({}).sort({createdAt: -1})
    res.status(200).json(plates)
}

//GET a plate
const getPlate = async (req, res) => {
    const {id} = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such plate (invalid ID)'})
    }
    
    const plate = await Plate.findById(id)

    if(!plate){
        return res.status(404).json({error: 'No such plate'})
    } 

    res.status(200).json(plate)
}

//DELETE a plate
const deletePlate = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such plate (invalid ID)'})
    }

    const plate = await Plate.findOneAndDelete({_id: id})

    if(!plate){
        return res.status(404).json({error: 'No such plate'})
    }

    res.status(200).json(plate)
}


//POST a plate
const  createPlate = async (req, res) => {
    const {title, genre, description, privacy} = req.body

    let emptyFields = []

    if (!title){
        emptyFields.push('title')
    }
    if (!genre){
        emptyFields.push('genre')
    }
    if (!description){
        emptyFields.push('description')
    }
    if (!privacy){
        emptyFields.push('privacy')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({ error : 'Missing Fields', emptyFields})
    }

    // add document to the database
    try{
        const plate = await Plate.create({title, genre, description, privacy})
        res.status(200).json(plate)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//UPDATE a plate
const updatePlate = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such plate (invalid ID)'})
    }

    const plate = await Plate.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!plate){
        return res.status(404).json({error: 'No such plate'})
    }

    res.status(200).json(plate)
}

module.exports = {
    createPlate,
    getPlates,
    getPlate,
    deletePlate,
    updatePlate
}