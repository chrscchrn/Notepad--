const path = require("path");
const db = require("../models")

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = (app) => {

    app.get("/signup", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    app.get("/", (req, res) => {
        if (req.user) {
            res.redirect("/notes");
            return;
        }
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });
  
    app.get("/login", (req, res) => {
        if (req.user) {
            res.redirect("/notes");
            return;
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });
    
    app.get("/search", isAuthenticated, (req, res) => {
        res.render("search", {
            data: "hello search"
        }) 
    });

    app.get("/notes", isAuthenticated, (req, res) => {
        db.Note.findAll({
            where: { UserId: req.user.id },
            order: [ ['updatedAt', 'DESC'] ]
        }).then(notes => {
            for (let i in notes) {
                let location = parseInt(i);
                notes[i].num = location + 1;
            }
            res.render("notes", {
                data: notes
            })
        })
    });

    app.get("/notesdata", isAuthenticated, (req, res) => {
        db.Note.findAll({
            where: { UserId: req.user.id },
            order: [ ['updatedAt', 'DESC'] ]
        }).then(notes => {
            res.json(notes);
        })
    });

    app.get("/about", (req, res) => {
        res.render("about", {
            data: "placeholder"
        })
    });

    app.get("/work", isAuthenticated, (req, res) => {
        res.render("work");
    });
 
};
