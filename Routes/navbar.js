const express = require("express");
const Router = express.Router();

// homepage
Router.get("/",(req,res)=>{
    res.render("../views/homepage");
})

// chairman
Router.get("/chairman",(req,res)=>{
    res.render("../views/about/chairman");
})

// management
Router.get("/management",(req,res)=>{
    res.render("../views/about/management");
})

// principal
Router.get("/principal",(req,res)=>{
    res.render("../views/about/principal");
})




module.exports = Router;