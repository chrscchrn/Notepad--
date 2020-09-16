var db = require("../models");

module.exports = function(app) {

    // GET route for getting all of the posts from a user with the id of id
    app.get("/api/notes/:userID", function(req, res) {
        var query = {};
        if (req.query.author_id) {
            query.AuthorId = req.query.author_id;
        }
        // going to change this to 
        db.Post.findAll({
            include: {
                model: db.Author
            },
            where: query
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    // Get route for retrieving a single post 
    app.get("/api/posts/:id", function(req, res) {
        // 2. Add a join here to include the Author who wrote the Post
        db.Post.findOne({
        include: {
            model: db.Author
        },
        where: {
            id: req.params.id
        }
        }).then(function(dbPost) {
            console.log(dbPost);
            res.json(dbPost);
        });
    });

    // POST route for saving a new post
    app.post("/api/posts", function(req, res) {
        db.Post.create(req.body).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    // DELETE route for deleting posts
    app.delete("/api/posts/:id", function(req, res) {
        db.Post.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    // PUT route for updating posts
    app.put("/api/posts", function(req, res) {
        db.Post.update(
            req.body,
        {
            where: {
            id: req.body.id
            }
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });
};