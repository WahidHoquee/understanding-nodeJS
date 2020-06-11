
var buffer = new ArrayBuffer(8) //Size in bytes => 8*8 = 64bits

console.log(buffer)

const view = new Int32Array(buffer);
view[0] = 15;
view[1] = 30;

console.log(view)