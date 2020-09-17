(() => {
    $.get("/api/notes").then(data => {
        console.log("we got it", data);
        $("#articles").text(data[0].title + "   Body:   " + data[0].body);
    });
})()//this needs to dynamically load all notes data. Then make buttons to go to that specific note-article pair