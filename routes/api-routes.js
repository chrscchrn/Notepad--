require("dotenv").config()
const db = require("../models")
const axios = require("axios");
let date = new Date()
// let date2 = new Date(date.setDate(date.getDate()))
let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDate()
let fullDay = `${year}-${month}-${day}`
// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('fd74db3423b5430780f46c67f89febb2');
console.log(fullDay)


module.exports = (app) => {
    app.get("/api/browse", async (req, res) => {
        try {
            const results = await axios.get(`http://newsapi.org/v2/everything?q=bitcoin&from=${fullDay}&sortBy=publishedAt&apiKey=${process.env.API_KEY}`)
            console.log(results);
            res.json({ data: results.data })
        }
        catch (data) { console.log(data) }
    })


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
    
    // app.get("/api/search", async (req, res) => {
    //     newsapi.v2.topHeadlines({
    //         sources: 'bbc-news,the-verge',
    //         q: 'business',
    //         category: 'general',
    //         language: 'en',
    //         country: 'us'
    //     }).then(results => {
    //         console.log(results);
    //         res.json({ data: results.data });
    //     });
    // });

    app.get("/api/notes", (req, res) => {
        //This will be a databse request to get all the difference notes and articles we saved. 
        res.json({ articles: ["articles go here"], notes: ["notes go here"] });
    });
}
