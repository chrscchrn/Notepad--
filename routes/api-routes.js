require("dotenv").config()
const db = require("../models")
var passport = require("../config/passport");

module.exports = (app) => {

    app.post("/api/login", (req, res) => {
        res.json({
            email: req.user.email,
            id: req.user.id
        });
    })

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



    //need to create an article ID system, maybe save the article url in sequelize
    app.post("/api/notes", (req, res) => {
        db.Note.create({
            title: req.body.title,
            body: req.body.body
        }).then((dbNote) => {
            res.json(dbNote);
        });
    });
}
