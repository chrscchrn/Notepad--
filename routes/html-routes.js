const path = require("path");
const db = require("../models")



module.exports = (app) => {

    app.get("/search", (req, res) => {
        res.render("search", {
            data: "hello search"
        })
    });

    app.get("/notes", (req, res) => {
        db.Note.findAll({}).then(notes => {
            res.render("notes", {
                data: notes
            })
        })
    });

    app.get("/work", (req, res) => {
        res.render("work", {
            data: "hello work"
        })
    });

    // app.get("/login", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/login.html"));
    // });

    // app.get("/signup", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/signup.html"));
    // });

}
