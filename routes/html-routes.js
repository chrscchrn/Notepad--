const path = require("path");


module.exports = (app) => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname + "../public/index.html"))
    })
}

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../landing.html"));
  });

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../login.html"));
  });

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../main.html"));
  });

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../gio/about.html"));
  });