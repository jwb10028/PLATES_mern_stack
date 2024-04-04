const mongoose = require('mongoose')

const Schema = mongoose.Schema

const plateSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    privacy: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Plate', plateSchema)