const express = require("express");

const app = express();
const PORT = 3000;

// Serve HTML files
app.use(express.static("public"));

// GET Route
app.get("/gethello", (req, res) => {
    res.send("Hello NodeJS!!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});