
/*Title: Exercise 2.4
 Author: Richard Krasso
 Date: 4-21-18
 Modified by: Hector Leguillow
*/



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>ViewModel Example</title>

    <!-- Stylesheet - Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"
          integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">

    <!-- JavaScript Libraries -->
    <script src="../knockout-3.4.2.js"></script>

</head>
<body>




var http = require("http");

var express = require("express");

var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.get("/", function(request, response) {

   response.render("index", {

       message: "Welcome to the homepage!"


   });

});


app.get('/'. function ("request response")
{
    response ("index");
    firstName: "Hector",
    lastName: "Leguillow",
    address: "Bellevue"
})

http.createServer(app).listen(8080, function() {

    console.log("EJS-Views app started on port 8080.");

});

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">

    <ul class="navbar-nav">

        <li class="nav-item active">

            nav-link" href="#">Home

        li>

        <li class="nav-item">

           

        li>

        <li class="nav-item">

            nav-link" href="#">Contact Us

        li>

    ul>

nav>

<div role="main" class="container">

    <br/><br/>

    <h2>EJS Views Example</h2>

    <div class="row">

       

sm-12">

            <div class="alert alert-success" role="alert">

                <strong>Message: </strong>  <span><%= message %></span>

            </div>

        </div>

    </div>

</div>

<body/>
<html/>


