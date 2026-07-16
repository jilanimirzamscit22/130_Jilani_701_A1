const fs = require("fs").promises;

// Task 1: Create a file
fs.writeFile("demo.txt", "Hello Node.js!")
    .then(() => {
        console.log("Task 1: File created.");

        // Task 2: Read the file
        return fs.readFile("demo.txt", "utf8");
    })
    .then((data) => {
        console.log("Task 2: File content:", data);

        // Task 3: Delete the file
        return fs.unlink("demo.txt");
    })
    .then(() => {
        console.log("Task 3: File deleted.");
    })
    .catch((err) => {
        console.log("Error:", err.message);
    });