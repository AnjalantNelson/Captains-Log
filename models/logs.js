const mongoose = require('mongoose');

// The Logs document is shaped from this schema
const logsSchema = new mongoose.Schema({ 
    title: { type: String, required: true }, 
    entry: { type: String, required: true }, 
    shipIsBroken: { type: Boolean, required: true, default: true }}, 
    { timestamps: true }
    );

// Essentially creating a Logs document
const Logs = mongoose.model('Logs', logsSchema);

module.exports = Logs;