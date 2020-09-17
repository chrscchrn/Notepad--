const path = require("path");


module.exports = (app) => {
    app.get("/main", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/main.html"))
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
    
    // app.get("/search", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/search.html"));
    // });

    // app.get("/browse", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/browse.html"));
    // });

    app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    
}
>>>>>>> d246042f6f84b1ce2832bc60cd6bf0b57d8178aa
