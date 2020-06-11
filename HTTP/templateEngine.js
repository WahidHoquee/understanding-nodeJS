const http = require("http");
const fs = require("fs");

const server = http.createServer((req, resp) => {
    //As readFileSync returns buffer we had to mention encoding method so that it converts to string
    let htmlFile = fs.readFileSync(__dirname + '/template.html', 'utf-8');
    console.log(htmlFile)

    resp.writeHead(200, { 'Content-Type': 'text/html' });
    
    //As the rules of template engine,The main purpose is to make content dynamic.
    //There is placeholder called {title} & {message}
    const message = "Hello World"
    const title = "Template Engine"
    htmlFile = htmlFile.replace('{title}',title)
    htmlFile = htmlFile.replace('{message}',message)

    //Browser supports both buffer or string
    resp.end(htmlFile)
})

server.listen(3000, '127.0.0.1')
