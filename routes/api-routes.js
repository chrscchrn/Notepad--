const db = require("../models")

module.exports = (app) => {
    app.get("/api/test", (req, res) => {
        res.json({ success: true })
    })
    app.get("/api/all", (req, res) => {
        db.User.find().then(results => {
            res.json({ data: results })
        })
    })
}