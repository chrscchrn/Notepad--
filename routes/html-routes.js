const path = require("path");
const db = require("../models")

<<<<<<< HEAD
var isAuthenticated = require("../config/middleware/isAuthenticated");

=======
>>>>>>> 6bf516a6c76c67530bc760d0c33f15cc42f7f5f4
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
<<<<<<< HEAD

    app.get("/about", (req, res) => {
      db.Work.findAll({}).then(notes => {
          console.log(notes)
          res.render("about", {
              data: notes
          })
      })
  });

=======
    
>>>>>>> 6bf516a6c76c67530bc760d0c33f15cc42f7f5f4
    app.get("/work", (req, res) => {
        db.Work.findAll({}).then(notes => {
            console.log(notes)
            res.render("work", {
                data: notes
            })
        })
    });

<<<<<<< HEAD
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
        res.sendFile(path.join(__dirname, "../public/members.html"));
      });
    
    };
=======
    app.get("/login", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/signup", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

}
>>>>>>> 6bf516a6c76c67530bc760d0c33f15cc42f7f5f4
