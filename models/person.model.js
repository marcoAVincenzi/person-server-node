const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    fullName: { type: String },
    location: { type: String },
    salary: { type: String },
    age: { type: String }
}, { collection: 'person' })

module.exports = mongoose.model('Person', personSchema)
