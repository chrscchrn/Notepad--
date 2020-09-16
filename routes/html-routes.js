const path = require("path");


module.exports = (app) => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname + "../public/index.html"))
    })
}

app.get("/browse", function(req, res) {
    res.sendFile(path.join(__dirname, "../landing.html"));
  });

app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../login.html"));
  });

app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../main.html"));
  });

app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

