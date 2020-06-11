const http = require("http");
const fs = require("fs");

const server = http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'text/html' });

    const htmlReadStream = fs.createReadStream(__dirname + '/template.html', {
        encoding: 'utf-8',
        highWaterMark: 100
    })
    
    //Here resp is a writable stream. So we are just piping with the read stream
    // htmlReadStream.pipe(resp);

    //To do customize the packet we need to pipe stream in this way
    const message = "Hello World"
    const title = "Template Engine"
    htmlReadStream.on("data", chunk => {
        console.log(chunk)
        console.log("break")
        chunk = chunk.replace('{title}',title)
        chunk = chunk.replace('{message}',message)
        resp.write(chunk)
    })


    //Browser supports both buffer or string
    // resp.end(htmlFile)
})

server.listen(3000, '127.0.0.1')
