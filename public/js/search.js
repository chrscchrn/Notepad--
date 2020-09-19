(() => {
    const $searchButton = $("#searchButton");
    $searchButton.on("click", event => {
        event.preventDefault();
        localStorage.clear();
        let instr = $("<h4>").text("Click the title to start taking notes.");
        let i = 1;
        $("#searchResults").append(instr);
        $.get("/api/search")
            .then(res => {
                res.forEach( data => {

                    localStorage.setItem(`article${i}`, JSON.stringify(data));

                    let $div = $("<div>");
                    $div.append("</br>");
                    $div.attr("class", "article-div article-div-color");

                    var title = $(`<a href='/work?num=${i}'>`).text(data.title);
                    i++;

                    $div.append(title);
                    var author = $("<p>").text(data.author);
                    $div.append(author);
                    var description = $("<p>").text(data.description);
                    $div.append(description);
                    var url = $(`<a href='${data.ur}'>`).text("Link to Website");
                    $div.append(url);

                    $("#searchResults").append($div);
                    $("#searchResults").append("</br>");

                    
                    //local storage?
                })
            })
            .catch(err => console.log(err));
    });
})()
//Here we have a response of 20 articles. We will dynamically load then with JQuery instead of handlebars