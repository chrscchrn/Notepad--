require("dotenv").config()
const db = require("../models")

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

    app.post("/api/notes", (req, res) => {
        console.log(req.body, "api-routes post is working"); //Its not working... :(
        db.Note.create({ 
            title: req.body.title,
            body: req.body.body
        }).then(function(dbNote) {
            res.json(dbNote);
        });
    });
}
