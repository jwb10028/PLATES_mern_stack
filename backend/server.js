require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const plateRoutes = require('./routes/plates')

//express app
const app = express()

//middle ware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes (all routes)
app.use('/api/plates', plateRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests on port
        app.listen(process.env.PORT, () => {
            console.log('connected to DB & listening on port', process.env.PORT)
        } )
    })
    .catch((error) => {
        console.log(error)
    })

