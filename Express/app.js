/*
    Returns a function called createApplication with the function's object portion some big module is Added with it.They are:
        -Router
        -Application
        -request
        -response
*/
const express = require("express"); 
const { response } = require("express/lib/express");
// const demo = require("./router")

/*
    Returns a function with some added properties with the funtions object
    It inherits property of EventEmiiter, request, response
*/
const app = express(); 

/*
    app.use('/') -> All request will follow this url => / , /hehllo, /hello/dhaka
    app.use('/hello') -> /hello, /hello/1, /hello/dhaka/demo
*/
app.use('/',(req, resp, next) => {
    /*
        We can add properties to the request/response. As req,resp is a object,Which is referencial.
        Each time a new request comes the req/resp will be resetted
        This req, resp arguments are passed by expressed. Not node's request and response object. Those Node's object was modified       
    */
    req.wahid = "Wahid";
    console.log(req.query.mid)
    next();
})

app.use('/',(req, resp)=>{
    resp.send(`<h1>${req.wahid}</h1>`)
})

app.use('/hello',(req, resp)=>{
    resp.send(`<h1>hello ${req.wahid}</h1>`)
})


app.use('/demo',(req, resp)=>{
    resp.send(`<h1>demo ${req.wahid}</h1>`)
})


app.listen(8000)