const fs = require('fs'),
    fsPromises = require('fs').promises
    path = require('path'),
    http = require('http');

console.log(__dirname)

// fs.readFile(path.join(__dirname, 'hmtl', 'index.html'), (err,data) => {
//     if (err) throw err;
//     console.log(data);
// })

// const readIndex = async () => {
//     try {
//         const data = await fsPromises.readFile(path.join(__dirname, 'html', 'index.html'));
//     }
//     catch (err) {
//         console.error(err);
//     }
// }
// readIndex();