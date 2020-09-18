const path = require("path");
const db = require("../models")

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = (app) => {

    app.get("/", function(req, res) {
        if (req.user) {
          res.redirect("/main");
        }
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });
  
    app.get("/login", function(req, res) {
      if (req.user) {
        res.redirect("/main");
      }
      res.sendFile(path.join(__dirname, "../public/login.html"));
    });
    
    app.get("/main", isAuthenticated, function(req, res) {
      res.sendFile(path.join(__dirname, "../public/work"));
    });

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

    app.get("/about", (req, res) => {
        res.render("about", {
            data: "placeholder"
        })
    });

    app.get("/work", (req, res) => {
        // db.Note.findAll({}).then(notes => {
            
        // })
        res.render("work", {
          data: "nothing" 
      })
    });

    
};
