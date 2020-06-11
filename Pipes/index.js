const fs = require("fs");
const zlib = require("zlib")


const readable = fs.createReadStream(__dirname + "/largeFile.txt"); //Readable Stream
const writable = fs.createWriteStream(__dirname + "/writeFile.txt") //Writable Stream
const compressed = fs.createWriteStream(__dirname + "/compressed.txt.gz") //Writable Stream

const gzip = zlib.createGzip() //Transform Stream - It compress the data 

// Joining the readable joint to writable joint
// What we read from readable is passed to writable
// Since pipe return the destination we can further chain up.
// We can not again pipe the destination to the another destination
// Because it is only writable to maintain chaining the middleware stream must be of duplex type

readable.pipe(writable)

// Under the hood the function of pipe
// We can pipeline in this way also, But upper one is a shorthand easy to write
// readable.on("data", (chunk) => {
//     writable.write(chunk)
//     return writable;
// });


//Chaning Stream Example
/*
    Steps done Here:
    1.First we start reading data from the readable file and storing it in buffer when the buffer gets filled out ->
    2.We pass it to the gzip which is a duplex stream it can both read the chunk and can modify the chunk. So it compress the chunk ->
    3.That returned compressed chunk from gzip is then passed to writable file ->
    4.Then the file gets overwritten
    5.We have been maintaining a method chaining procedure
    6. Chunk of data we fetched and then pass it to other stream to process and the consequence is passed to another stream
*/

readable.pipe(gzip).pipe(compressed)
