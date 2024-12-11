var http = require('http');
var fs = require('fs');

fs.appendFile('myNewTextFile.txt', "hello content", function (err) {
    if (err) throw err;
    console.log('saved again');
});

fs.open('myNewTextFile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('saved a new empty file');
});

fs.writeFile("myNewTextFile3.txt", "Hello content!", function (err) {
    if (err) throw err;
    console.log('saved a third file');
});

fs.appendFile('myNewTextFile.txt', "Some new appended content to an existing file", function (err){
    if (err) throw err;
    console.log('Update the first file');
});

fs.writeFile('myNewTextFile3.txt', "This is some new replacement text", function (err) {
    if (err) throw err;
    console.log("Replaced!");
});

fs.unlink('myNewTextFile2.txt', function(err){
    if (err) throw err;
    console.log('Removed!');
});

fs.rename('myNewTextFile.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('Renamed!');
});


http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);