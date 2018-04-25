var express = require("express");
var http = require("http");

var app = express();

app.get("/Get", function(request, response) {
    response.send("API invoked as an HTTP GET request.");
});

app.put("/Put", function(request, response) {
    response.send("API invoked as an HTTP PUT request.");
});

app.post("/Post", function(request, response) {
    response.send("API invoked as an HTTP POST request");
});

app.delete("/Delete", function(request, response) {
    response.send("API invoked as an HTTP DELETE request");
});

http.createServer(app).listen(3000, function() {
    console.log("Application started on port 3000!");
});