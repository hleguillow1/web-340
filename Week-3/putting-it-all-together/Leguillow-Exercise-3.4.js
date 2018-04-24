/*Title: Exercise 3.4
 Author: Richard Krasso
 Date: 4-24-18
 Modified by: Hector Leguillow
*/



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Leguillow-Exercise-3.4-Putting-it-all-togethern</title>

    <!-- Stylesheet - Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"
          integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">



</head>
<body>

    var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function(request, response) {

    response.render("index", {

        message: "home page"

    });

});

app.get("/about", function(request, response) {

    response.render("about", {

        message: "about page"

    });

});

app.get("/contact", function(request, response) {

    response.render("contact", {

        message: "contact page"

    })

});

app.get("/products", function(request, response) {

   response.render("products", {

       message: "products page"

   });

});

http.createServer(app).listen(8080, function() {

   console.log("Application started on port 8080.");

});

header.ejs

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <title>Putting it all together...</title>

    <!-- Stylesheet - Bootstrap -->

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"

          integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">

</head>

<body>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">

    <ul class="navbar-nav">

        <li class="nav-item active">

            <a class="nav-link" href="/">Home</a>

        </li>

        <li class="nav-item">

            <a class="nav-link" href="/about">About me</a>

        </li>

        <li class="nav-item">

            <a class="nav-link" href="/contact">Contact</a>

        </li>

        <li class="nav-item">

            <a class="nav-link" href="/products">Products</a>

        </li>

    </ul>

</nav>

footer.ejs

</body>

</html>

contact.ejs

<% include header %>

<div role="main" class="container">

    <br/><br/>

    <h2>Welcome to the <%= message %>!</h2>

</div>

<% include footer %>

about.ejs

<% include header %>

<div role="main" class="container">

    <br/><br/>

    <h2>Welcome to the <%= message %>!</h2>

</div>

<% include footer %>

products.ejs

<% include header %>

<div role="main" class="container">

    <br/><br/>

    <h2>Welcome to the <%= message %>!</h2>

</div>

<% include footer %>

index.ejs

<% include header %>

<div role="main" class="container">

    <br/><br/>

    <h2>Welcome to the <%= message %>!</h2>

</div>

<% include footer %>







           

         
    

<body/>
<html/>
