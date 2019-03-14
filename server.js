                            // Resources
const express = require("express");
const bodyParser = require("body-parser");
const ejs= require("ejs");
const path = require("path");

                           // Initialization
const app = express();
const port = process.env.PORT || 3001;
app.listen(port,()=>{console.log(`server is listening at port:port`)});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,"./public/")))
app.set("view engine","ejs");

                           // Routes
app.get("/",(req,res)=>{
    res.render("homepage")
});
app.get("/chairman",(req,res)=>{
    res.render("./AboutMandar/chairman");
})
app.get("/images/entirepage",(req,res)=>{
    res.send(path.join("/images/entirepage.png"));
})


