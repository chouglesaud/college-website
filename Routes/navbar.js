const express = require("express");
const Router = express.Router();

// homepage
Router.get("/",(req,res)=>{
    res.render("../views/homepage");
})

// about-- /chairman
Router.get("/chairman",(req,res)=>{
    res.render("../views/about/chairman");
})

// about-- /management
Router.get("/management",(req,res)=>{
    res.render("../views/about/management");
})

// about-- /principal
Router.get("/principal",(req,res)=>{
    res.render("../views/about/principal");
})

// institute--/engineering
Router.get("/engineering",(req,res)=>{
    res.render("../views/institute/engineering");
})

// institute--/polytechnic
Router.get("/polytechnic",(req,res)=>{
    res.render("../views/institute/polytechnic");
})


//-----------------------------------------------------------------

// engineering directory
let eng_dir = '../views/institute/engineering';

// institute--engineering/computer
Router.get("/engineering/computer",(req,res)=>{
    res.render(`${eng_dir}/computer.ejs`);
})

// institute--engineering/mechanical
Router.get("/engineering/mechanical",(req,res)=>{
    res.render(`${eng_dir}/mechanical.ejs`);
})

// institute--engineering/electrical
Router.get("/engineering/electrical",(req,res)=>{
    res.render(`${eng_dir}/electrical.ejs`);
})

// institute--engineering/electronics
Router.get("/engineering/electronics",(req,res)=>{
    res.render(`${eng_dir}/electronics.ejs`);
})

// institute--engineering/entc
Router.get("/engineering/entc",(req,res)=>{
    res.render(`${eng_dir}/entc.ejs`);
})

// institute--engineering/science
Router.get("/engineering/science",(req,res)=>{
    res.render(`${eng_dir}/science.ejs`);
})


//-------------------------------------------------------

// polytechnic directory
let poly_dir = '../views/institute/polytechnic';

// institute--polytechnic/computer
Router.get("/polytechnic/computer",(req,res)=>{
    res.render(`${poly_dir}/computer.ejs`);
})

// institute--polytechnic/mechanical
Router.get("/polytechnic/mechanical",(req,res)=>{
    res.render(`${poly_dir}/mechanical.ejs`);
})

// institute--polytechnic/electrical
Router.get("/polytechnic/electrical",(req,res)=>{
    res.render(`${poly_dir}/electrical.ejs`);
})

// institute--polytechnic/automobile
Router.get("/polytechnic/automobile",(req,res)=>{
    res.render(`${poly_dir}/automobile.ejs`);
})

// institute--polytechnic/intc
Router.get("/polytechnic/intc",(req,res)=>{
    res.render(`${poly_dir}/intc.ejs`);
})

// institute--polytechnic/science
Router.get("/polytechnic/science",(req,res)=>{
    res.render(`${poly_dir}/science.ejs`);
})

// institute--polytechnic/civil
Router.get("/polytechnic/civil",(req,res)=>{
    res.render(`${poly_dir}/civil.ejs`);
})








module.exports = Router;