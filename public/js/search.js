(() => {
    $('select').formSelect();
    //
    let isDivThere = false
    
    const $searchButton = $("#searchButton");
    $searchButton.on("click", event => {
        event.preventDefault();
        localStorage.clear();
        let category = $('#category').val(); //send to back end to put into api
        // clear any previous search results
        $(".article-div").remove();
        
        //do keyword input

        let instr = $("<h5>").text("Click Article Title to Start Taking Notes.");
        //localStorage number
        let i = 1;

        (!isDivThere) ? $(".center").append(instr) : null;
        isDivThere = true;

        let searchParams = {
            category: category
        } 

        $.get("/api/search", searchParams).then(res => {
            console.log(res);
            res.forEach( data => {

                localStorage.setItem(`article${i}`, JSON.stringify(data));

                let $div = $("<div>");
                $div.attr("class", "article-div article-div-color");

                var title = $(`<a href='/work?num=${i}'>`).text(data.title);
                title.css("font-size", "2rem");
                title.css("color", "black");
                i++;

                $div.append(title);
                var author = $("<p>").text(data.author);
                $div.append(author);
                var description = $("<p>").text(data.description);
                $div.append(description);
                var url = $(`<a href='${data.url}'>`).text("Link to Website");
                $div.append(url);
                // $div.css("padding", "20px");

                $("#searchResults").append($div);
            });
        }).catch(err => console.log(err));
    });
})()
