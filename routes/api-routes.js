require("dotenv").config()
const db = require("../models")
<<<<<<< HEAD
const axios = require("axios");



module.exports = (app) => {
    app.get("/api/news/latest", async (req, res) => {
        const results = await axios.get(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-15&sortBy=publishedAt&apiKey=${process.env.API_KEY}`)
        res.json({ data: results.data })
=======

module.exports = (app) => {

    app.post("/api/login", (req, res) => {
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
            email: req.user.email,
            id: req.user.id
        });
    })

    app.post("/api/signup", (req, res) => {
        db.User.create({
            email: req.body.email,
            password: req.body.password
        })
            .then(() => {
                res.redirect(307, "/api/login");
            })
            .catch(err => {
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
    
    app.get("/api/notes", (req, res) => {
        //This will be a databse request to get all the difference notes and articles we saved. 
        res.json({ articles: ["articles go here"], notes: ["notes go here"] });
>>>>>>> d246042f6f84b1ce2832bc60cd6bf0b57d8178aa
    });
    app.get("/api/all", (req, res) => {
        db.User.find().then(results => {
            res.json({ data: results })
        })
    })
}
