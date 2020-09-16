const path = require("path");


module.exports = (app) => {
    app.get("/main", (req, res) => {
        res.sendFile(path.join(__dirname + "../public/main.html"))
    })

    // app.get("/browse", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/browse.html"));
    // });

    app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    // app.get("/search", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/index.html"));
    // });

}