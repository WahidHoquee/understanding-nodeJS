const http = require("http");

/*
  - createServer returns a object with a lot of functionality
  - http inherits EventEmitter
  - Once it creates a server,The program doesnt stop
  - Once request comes it reopen the socket
  - Emits the 'request' event
  - The call its given callback with request property and response property
  When we send request using any url it hits this server like
        localhost:1337
        localhost:1337/data
        localhost:1337/data/5
    - All request is being forwarded to this same server exactly to this ports.
    - Browser sends HTTP request in the TCP/IP ways of ssending data always in case of API
    - in the HTTP request the url is also passed.
    - So its our choice to handle that url
*/
const server = http.createServer((req, resp) => {
    //We are writing response Header
    //200 is the status code
    //The other one is response header's information using object
    //There will be some additional header like Connection: Keep-alive. It is being done by nodejs automatically
    resp.writeHead(200, { 'Demo': 'Hudai' });
    //We must end a response with calling response.end
    //We are sending a universal response,Whatever the url is
    //We are not conditionaly checking the handle and process accordingly
    resp.end("Hello World")
})

//Here 127.0.0.1 is the Server's Address
//One Server can have multiple Ports/Gates through which we can request
//Here we are requesting 3000 PORT for requesting
server.listen(3000, '127.0.0.1')

/*
    - On the browser end we will see its request for favicon.ico. It is for the top tab icon/website icon. It is     default browser behaviour for requesting data.
    -Favicon will be also executing the callback of createServer. We should havew logic for that also, Or should follow the default case
*/