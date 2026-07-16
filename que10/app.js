// Global Objects Example

console.log("Current File :", __filename);
console.log("Current Directory :", __dirname);

console.log("\nNode Version :", process.version);
console.log("Platform :", process.platform);

// Read command-line arguments
console.log("\nCommand Line Arguments:");

const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("No arguments provided.");
} else {
    args.forEach((arg, index) => {
        console.log(`Argument ${index + 1}: ${arg}`);
    });
}

// setTimeout() - Global function
setTimeout(() => {
    console.log("\nProgram executed successfully after 2 seconds.");
}, 2000);