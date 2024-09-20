const fs = require('fs'),
    path = require('path'),
    http = require('http');

const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    
    if (req.url==='/' || req.url==='index.html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        let file_path = path.join(__dirname, 'htmls', 'index.html');
        fs.readFile(file_path, (err, data) => {
            res.end(data);
        });
    }
    else if(req.url==='/img/HelloWorld.jpg') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpeg');
        let file_path = path.join(__dirname, 'img', 'HelloWorld.jpg');
        fs.readFile(file_path, (err, data) => {
            res.end(data);
        });
    }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
