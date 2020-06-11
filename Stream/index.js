const fs = require("fs");

//It is inheriting by => File System -> Stream.Readable -> Stream -> Event Emitter
const readable = fs.createReadStream(__dirname + "/largeFile.txt", {
    encoding: "utf8", //Encoding format of converting buffer.
    highWaterMark: 2 * 1024, //Setting the Size of buffer in bytes => 2Kb = 2 * 1024 bytes => 2048byres
});

//We are making a file writing stream
const writable = fs.createWriteStream(__dirname + "/writeFile.txt")

//When the buffer size gets fulled then this "data" event will be emitted from the event emitter
//The following callback will then be called
readable.on("data", (chunk) => {
    // Data will be recived as buffer if we dont setup encoding option in the ReadStream
    console.log(chunk)
    console.log(chunk.length);
    console.log("******************************************************************");

    //Each chunk we retrieved is written in the writeFIle. It resets the whole file and then write the file
    writable.write(chunk)
});
