require("dotenv").config();
require("dotenv").config()
const db = require("../models");
const { default: axios } = require("axios");
var passport = require("../config/passport");

const key = 'fd74db3423b5430780f46c67f89febb2';
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();   
month++;
let fullDay = `${year}-${month}-${day}`;

module.exports = (app) => {

    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        res.json(req.user);
    });

    app.post("/api/signup", (req, res) => {
        console.log(req.body.email, req.body.password);
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(() => {
            res.redirect(307, "/api/login");
        }).catch(err => {
            res.status(401).json(err);
        });
    });

    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });

    app.get("/api/user_data", (req, res) => {
        if (!req.user) {
            res.json({});
        } else {
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });
    
    app.get("/api/search", (req, res) => { //enter user keywork in q key
        let category = "";
        axios.get(`http://newsapi.org/v2/top-headlines?country=us&language=en&category=technology&from=${fullDay}&sortBy=publishedAt&apiKey=${key}`)
        .then(data => res.json(data.data.articles))
        .catch(err => res.json(err));
    });
    
    app.post("/api/work", (req, res) => {
        db.Note.create({
            title: req.body.title,
            body: req.body.body,
            url: req.body.url,
            article: req.body.article,
            UserId: req.user.id
        }).then((dbWork) => {
            res.json(dbWork);
        });
    });

    app.get("/api/work/update", (req, res) => {
        db.Note.findOne({ where: { url: req.query.url } })
            .then((dbWork) => {
                res.json(dbWork);
            });
    });

    app.put("/api/work/update", (req, res) => {
        db.Note.update({
            title: req.body.title,
            body: req.body.body
        },
        {
            where: { url: req.body.url }
        }).then((dbWork) => {
            res.json(dbWork);
        });
    });
}
