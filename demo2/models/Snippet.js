const mongoose = require('mongoose');

// Define the schema for a snippet
const snippetSchema = new mongoose.Schema({
    username: { type: String, required: true },
    language: { type: String, required: true },
    code: { type: String, required: true },
    stdin: { type: String , required:true}, // If applicable
    timestamp: { type: Date, default: Date.now }
});

// Create a model based on the schema
const Snippet = mongoose.model('Snippet', snippetSchema);

module.exports = Snippet;

