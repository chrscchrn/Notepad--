require("dotenv").config()
const db = require("../models")
var passport = require("../config/passport");

module.exports = (app) => {

    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json(req.user);
      });

    app.post("/api/signup", (req, res) => {
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

    app.get("/api/search", (req, res) => {
        axios.get(`http://newsapi.org/v2/everything?q=general&from=${fullDay}&sortBy=publishedAt&apiKey=${key}`)
        .then(data => res.json(data.data.articles))
        .catch(err => res.json(err));
    });
    
    app.post("/api/work", (req, res) => {
        db.Note.create({
            title: req.body.title,
            body: req.body.body
        }).then((dbWork) => {
            res.json(dbWork);
        });
    });
}