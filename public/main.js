
$(document).ready(() => {
    $.ajax({
        url: "/api/news/latest",
        method: "GET"
    }).then(res => {
        $("#api-response").text(JSON.stringify(res))
    })
})

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
    res.sendFile(path.join(__dirname, "../main.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../gio/about.html"));
  });

