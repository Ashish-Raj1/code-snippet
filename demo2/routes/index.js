const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Snippet = require('../models/Snippet'); // Import the Snippet model

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Handle POST request to store snippet in the database
router.post('/submit', (req, res) => {
    const { username, language, code } = req.body;
    const newSnippet = new Snippet({ username, language, code });
    newSnippet.save()
        .then(snippet => {
            console.log("Snippet stored successfully in the database.");
            res.json({ message: "Snippet stored successfully in the database." });
        })
        .catch(error => {
            console.error("Error saving snippet:", error);
            res.status(500).json({ error: "An error occurred while saving the snippet." });
        });
        

});

module.exports = router;
