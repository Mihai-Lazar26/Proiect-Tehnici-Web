const express = require("express");
const bodyParser = require("body-parser");
const Session = require("express-session");
const fs = require("fs");
const server = express();

server.use(express.static('public')); //Asta o adaugai acum
server.use(Session({

    secret : "Ce vrei tu",
    resave : false,
    saveUninitialized : false,
    cookie : {
        maxAge: 1000*60*60
    }

}))


let urlencodedParser = bodyParser.urlencoded({ extended: false })

var name;

server.post("/login", urlencodedParser, (req, res) => {
    
    //res.sendFile("./index.html", {root: __dirname });
    //res.render("index");
    // console.log("Nume: " + req.body.name);
    // if(!req.body.name)
    // {
    //     console.log("No name added")
    // }

    req.session.name = req.body.name;
    name = req.session.name;

    console.log(req.session.name + " Post");

    res.redirect("/home");
})


server.get('/nume', (req, res) => {
    fs.readFile("fisier.json", "utf8", function (error, data) {
        if(error) {
            res.status(404).send("error: " + error);
        }
        else{
            res.render("nume", JSON.parse(data))
        }
    })
})

server.get('/home', (req, res) => {
    // res.render('index');
    res.sendFile("./index.html", {root: __dirname });
})

server.get('/logout',(req,res)=>{
    req.session.destroy();

    res.redirect('/login')
})

server.get("/login", (req, res) => {
    
    //res.sendFile("./index.html", {root: __dirname });
    console.log(req.session.name + " Get");
    if(req.session.name)
    {
        res.redirect("/home");
    }
    else
    {
        res.render("login");
        
    }
})

server.get('/',(req,res)=>{
    res.render('test');
})

server.get("/user", (req, res) => {
    
    //res.sendFile("./index.html", {root: __dirname });

    res.send(req.session);
})



server.listen(3000);

server.set("view engine", "ejs");