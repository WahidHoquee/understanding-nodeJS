const fs = require("fs")

//Syncrounous Way
//Thread of execution will be paused untill the file is fetched
const greet = fs.readFileSync(__dirname+'/greet.txt', 'utf8')
console.log(greet)


//Thread of execution will not be paused, file is fetched async ways
//In the callback we are passing error as first params,It is the standard called error first strategy
const greet2 = fs.readFile(__dirname+'/greet.txt', (error, data) => {
    //Data is retrieved in buffer format. We need to convert it
    console.log(data.toString())
    console.log(data.toJSON())
})

const greet3 = fs.readFile(__dirname+'/greet.json', (error, data) => {
    console.log(data.toJSON())
    //Data is retrieved in buffer format. We need to convert it
    //To convert it into JSON format we have to Parse it
    console.log(JSON.parse(data))
})
