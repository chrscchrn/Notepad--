require("dotenv").config()
const db = require("../models")
const axios = require("axios");
let date = new Date()
let date2 = new Date(date.setDate(date.getDate()))
let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDate()
let fullDay = `${year}-${month}-${day}`
console.log(fullDay)


module.exports = (app) => {
    app.get("/api/news/latest", async (req, res) => {
        try {
            const results = await axios.get(`http://newsapi.org/v2/everything?q=bitcoin&from=${fullDay}&sortBy=publishedAt&apiKey=${process.env.API_KEY}`)
            console.log(results);
            res.json({ data: results.data })
        }
        catch (data) { console.log(data) }
    });

    app.get("/api/all", (req, res) => {
        db.User.find().then(results => {
            res.json({ data: results })
        })
    })
}