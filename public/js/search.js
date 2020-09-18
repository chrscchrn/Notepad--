const $searchButton = $("#searchButton");

(() => {
    $searchButton.on("click", event => {
        event.preventDefault();
        $.get("/api/search")
            .then(res => console.log(res))
            .catch(err => console.log(err));
    });
})()
//Here we have a response of 20 articles. We will dynamically load then with JQuery instead of handlebars