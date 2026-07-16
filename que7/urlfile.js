const http = require("http");

const server = http.createServer(async (req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const pathname = parsedUrl.pathname;

    if (pathname === "/google") {
        try {
            const response = await fetch("https://www.google.com");
            const data = await response.text();

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);

        } catch (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error: " + err.message);
        }
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Route Not Found");
    }
});

server.listen(3004, () => {
    console.log("Server running at http://localhost:3004");
});