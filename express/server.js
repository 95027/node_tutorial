const express = require('express');
const path = require('path');
const subdir = require('./routes/subdir');

const app = express();

// built in middlewares

//middleware to handle urlencoded data or form data
app.use(express.urlencoded({extended : false}));

//middleware for json
app.use(express.json());

//serve static files 
app.use(express.static(path.join(__dirname, "/public")));

app.use("/", subdir);

/* app.get("^/$|index(.html)?", (req,res)=>{
    //res.sendFile("./views/index.html", {root : __dirname});
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

// for matching the routes / or index or index.html
app.get("/new(.html)?", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "new.html"))
});

app.get("/old(.html)?", (req, res) => {
    // 301 indicates redirecting permently
    res.redirect(301,"/new.html") // 302 by default
}) */


//route handlers

app.get("/hello(.html)?", (req, res, next) => {
    console.log("attempted to load hello.html");
    next()
}, (req, res) => {
    res.send("hello world")
})

app.get("/*", (req, res) => {
    //status for sending status code 
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>console.log("server is running on " + PORT));