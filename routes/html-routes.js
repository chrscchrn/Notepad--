const path = require("path");
const db = require("../models")



module.exports = (app) => {

    app.get("/search", (req, res) => {
        db.Search.findAll({}).then(entry => {
            console.log(entry)
            res.render("search", {
                data: entry
            })
        })
    });

    app.get("/notes", (req, res) => {
        db.Note.findAll({}).then(notes => {
            console.log(notes)
            res.render("notes", {
                data: notes
            })
        })
    });

    app.get("/work", (req, res) => {
        db.Work.findAll({}).then(notes => {
            console.log(notes)
            res.render("work", {
                data: notes
            })
        })
    });

    // app.get("/login", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/login.html"));
    // });

    // app.get("/signup", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/signup.html"));
    // });

}
