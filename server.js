// dependecies
var express = require("express");

// Set up our Express Application
var app = express();

var PORT = process.env.PORT || 3030;

// Allows Express App to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Setting up our Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Create our listener
app.listen(PORT, function (){
    console.log("APP LISTENING on PORT: " + PORT);
})