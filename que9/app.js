const fs = require("fs");

// 1. Write to a file
fs.writeFileSync("demo.txt", "Hello Node.js!");

// 2. Read the file
const data = fs.readFileSync("demo.txt", "utf8");
console.log("File Content:", data);

// 3. Append data to the file
fs.appendFileSync("demo.txt", "\nWelcome to FS Module!");

// 4. Get file information
const stats = fs.statSync("demo.txt");
console.log("File Size:", stats.size, "bytes");

// 5. Check if file exists
if (fs.existsSync("demo.txt")) {
    console.log("File exists.");
}

// 6. Rename the file
fs.renameSync("demo.txt", "sample.txt");
console.log("File renamed successfully.");

// 7. Copy the file
fs.copyFileSync("sample.txt", "copy.txt");
console.log("File copied successfully.");

// 8. Delete the copied file
fs.unlinkSync("copy.txt");
console.log("Copied file deleted.");