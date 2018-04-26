// require statements

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var bodyParser = require("body-parser");

var cookieParser = require("cookie-parser");

var csrf = require("csurf");

 

// setup csrf protection

var csrfProtection = csrf({cookie: true});

 

// initialize the express application

var app = express();

 

// use statements

app.use(logger("short"));

app.use(bodyParser.urlencoded({

    extended: true

}));

app.use(cookieParser());

app.use(csrfProtection);

app.use(function(request, response, next) {

    var token = request.csrfToken();

    response.cookie('XSRF-TOKEN', token);

    response.locals.csrfToken = token;

    next();

});

 

// set statements

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

 

// routing

app.get("/", function(request, response) {

    response.render("index", {

        message: "New Fruit Entry Page"

    });

});

app.post("/process", function(request, response) {

    console.log(request.body.txtName);

    response.redirect("/");

});

 

// create and start the Node server

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});

index.ejs

<div role="main" class="container">

    <br/><br/>

    <h2><%= message %></h2>

    <form method="post" action="/process">

        <div class="form-group">

            txtName">Name:

                        <label for=" txtName" name="txtName"/>

        </div>

        <div class="form-group">

            <!-- CSRF token -->

            <input name= _csrf" value="<%= csrfToken %>" type="hidden">

            <button type="submit" class="btn btn-primary float-right">Submit</button> 
        </div>

    </form>

</div>