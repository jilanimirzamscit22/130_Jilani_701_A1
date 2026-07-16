
const http = require("http");
const static = require("node-static");

// Create a static file server
const fileServer = new static.Server("./static");

const server = http.createServer(function (req, res) {
    req.addListener("end", function () {
        fileServer.serve(req, res);   // <-- use serve(), not server()
    }).resume();
});

server.listen(8003, () => {
    console.log("Server is listening on http://localhost:8003");
});