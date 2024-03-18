const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const Snippet = require('./models/Snippet'); // Import the Snippet model

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Use the router defined in index.js
app.use('/', indexRouter);

// Handle POST request to store username, language, and code in the database
app.post('/submit', (req, res) => {
    const { username, language, code } = req.body;
    const newSnippet = new Snippet({ username, language, code });
    newSnippet.save()
        .then(snippet => {
            console.log("Snippet stored successfully in the database.");
            res.json({ message: "Snippet stored successfully in the database." });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: "An error occurred while saving the snippet." });
        });
});

// Start the server
const PORT = process.env.PORT || 4500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
