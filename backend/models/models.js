const { timeStamp } = require('console');
const mongoose = require('mongoose');
const EventoSchema = new mongoose.schema({
    eventType: String,
    attendees: number,
    date: date,
    duration: number,
    location: String,
    name: String,
    email: String,
    phone: String,
    company: String,
    message: String,
},{timeStamps: true})
module.exports = mongoose.model('Evento',EventoSchema);