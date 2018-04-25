
var path = require("path");


// app functions
var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.get("/", function(request, response){

// local composer array

var composers =[
    
"Bach",

"Mozart",

"Beethoven",

"Verdl"
];

//routes
 app.get('/', function (req, res){
     res.render('index',{
         names: composers
     });
 });


 // create server

 http.creatServer(app).listen3000, function() {
console.log('Application started and listening on port 3000')
 });
    response.type("text");
 
    response.render("index", {

        message: "Text based message"

    });

});

