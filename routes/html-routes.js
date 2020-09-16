const path = require("path");

<<<<<<< HEAD

=======
>>>>>>> 626e433453aadd779ca5ef8fcf7fa975a47ec28e
module.exports = (app) => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname + "../public/index.html"))
    })
<<<<<<< HEAD
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

=======
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
}
>>>>>>> 626e433453aadd779ca5ef8fcf7fa975a47ec28e
