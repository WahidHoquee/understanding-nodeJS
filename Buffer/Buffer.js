//Buffer is a small storage of binary data
//Buffer can be sourced from TCP stream of data, file transfer
//Buffer has a fixed & limited size of memory
//Using this class we can control the conversion of raw binary data to other format.
const buffer = Buffer.from('Hello', 'utf-8')

//The value will be printed as hexadeciamal for readability
//But actually it is storing binary data
console.log(buffer)
//The buffer is kind of in array format
console.log(buffer[2])


//We can convert the encoded value to int or string or JSON or Boolean
console.log(buffer.toString())
console.log(buffer.toString('hex'))
console.log(Boolean(buffer))

//Character Set value of each character is stored as array element in the data property
// { type: 'Buffer', data: [ 49, 50 ] }
console.log(buffer.toJSON())

//If the buffer value is convertable to int otherwise NaN
console.log(parseInt(buffer)) 

//Since buffer is of fixed size we cant strech the size
//So write method just start overriding the buffer from the start
buffer.write("Wa");
console.log(buffer.toString()) //Wallo