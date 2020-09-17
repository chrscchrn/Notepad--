const path = require("path");


module.exports = (app) => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/login.html"))
    })
    
    app.get("/main", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/main.html"))
    })
    
    app.get("/search", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/search.html"));
    });

    app.get("/browse", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/browse.html"));
    });

    app.get("/about", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/about.html"))
    })

    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    app.get("/work", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/work.html"));
    });
    // http://localhost:8080/work dont make route until it can load article
    
}