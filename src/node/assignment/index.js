// const http = require('http');
// const url = require('url');
// const fs = require('fs');
//
// http.createServer((req, res) => {
//     let q = url.parse(req.url, true);
//     let filename = q.pathname == "/" ? "./index.html" : "." + q.pathname + ".html";
//
//     fs.readFile(filename, (err, data) => {
//         if (err) {
//             res.writeHead(404, {'Content-Type': 'text/html'});
//             return res.end("404 Not Found");
//         }
//
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);

const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.sendFile("index.html", {root: '.'});
});

app.get("/about", (req, res) => {
    res.sendFile("about.html", {root: '.'});
});

app.get("/contact", (req, res) => {
    res.sendFile("contact-me.html", {root: '.'});
});

app.get("*", (req, res) => {
    res.sendFile("404.html", {root: '.'});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});