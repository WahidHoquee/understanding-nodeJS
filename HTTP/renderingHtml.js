const http = require("http");
const fs = require("fs");

const server = http.createServer((req, resp) => {
    //Fetching html files from the fileStorage
    //If we change html file or any file we dont need to restart the server,Because file is being read everytime when we request. So if file got changed it will read the changed file.
    //On the other hand node is compiled to machine language,So if we change source code,machine code neexd to be rebuild again thats why we restart node server
    const htmlFile = fs.readFileSync(__dirname + '/index.html')

    //Content-Type lets browser know how to deal with this file
    //If we set type to text/plain then HTML rendering will not occur instead it will display as a normal text file.
    resp.writeHead(200, { 'Content-Type': 'text/html' });
    resp.end(htmlFile)
})

server.listen(3000, '127.0.0.1')
