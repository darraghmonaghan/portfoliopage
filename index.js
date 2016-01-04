
var express = require("express"),
	app = express(),
    bodyParser = require("body-parser"),
    path = require("path"),
    mongoose = require('mongoose'),
    views = path.join(__dirname, "views"),
    session = require("express-session");


app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

app.use(bodyParser.urlencoded({extended: true}));

app.use(
  session({
    secret: 'super-secret-private-keyyy',
    resave: false,
    saveUninitialized: true
  })
);


app.get("/", function (req, res) {
	var homepage = path.join(views, 'index.html');
	res.sendFile(homepage);
});


app.listen(process.env.PORT || 3000, function () {
    console.log("Yeah Buddy! head to:", this.address().port, app.settings.env);
});


    
