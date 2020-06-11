const http = require("http");

const obj = {
    name: 'Wahid',
    age: 18
}
const server = http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'application/json' });

    // We cant pass data as object beacuase JS cant convert it to buffer
    // We must pass data in the format of string which is convertable to buffer
    // Other available options - JSON, XML, CSV
    // resp.end(obj.toString())

    //We are serializing object
    //Javascript running in the browser will deserialize it
    resp.end(JSON.stringify(obj))
})

server.listen(3000, '127.0.0.1')
