const fs = require("fs");
const util = require("util");

// Promisify fs.unlink
const unlinkFile = util.promisify(fs.unlink);

// Delete file
unlinkFile("sample.txt")
  .then(() => {
    console.log("File deleted successfully.");
  })
  .catch((err) => {
    console.log("Error:", err.message);
  });