ar express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");



var mongoDB = "mongodb://<dbuser>:<dbpassword>@ds117729.mlab.com:17729/ems";
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});



var app = express();
app.use(logger("short")
http.createServer(app).listen(5000, function() {
    console.log("Application connected to port 5000!");
});