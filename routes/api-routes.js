require("dotenv").config()
const db = require("../models")
const axios = require("axios");



module.exports = (app) => {
    app.get("/api/news/latest", async (req, res) => {
        const results = await axios.get(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-15&sortBy=publishedAt&apiKey=${process.env.API_KEY}`)
        res.json({ data: results.data })
    });
    app.get("/api/all", (req, res) => {
        db.User.find().then(results => {
            res.json({ data: results })
        })
    })
}
