const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (e.g., index.html, CSS, and JS files)
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to send a funny message
app.get('/api/data', (req, res) => {
    const messages = [
        "Why did the cursor cross the screen? To click the other side!",
        "I'm not lost, just exploring...",
        "Catch me if you can!",
        "Oops, I think I moved!",
        "Stop chasing me....!"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    res.json({ message: randomMessage });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
