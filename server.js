const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/product") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            id: 101,
            name: "Laptop",
            price: 50000,
            category: "Electronics"
        }));
    } else {
        res.writeHead(404);
        res.end("Route Not Found");
    }
});

server.listen(3000, () => {
    console.log("Product Details Microservice running on port 3000");
});