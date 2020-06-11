exports = module.exports = express
function express() {
    console.log(arguments)
    const app = function () {
        console.log("I ma inside app function")
    };
    app.data = "Wahid"
    return app;
}

express.code = "Hello"
exports.demo = {
    name: "Wahid"
}