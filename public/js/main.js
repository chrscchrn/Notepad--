(() => {
    const browseBtn = $("#browse");
    const searchBtn = $("#browse");
    const aboutBtn = $("#about");

    $.get("/api/user_data").then(data => {
        $(".member-name").text(data.email);
    });

    //BUTTONS DONT EXIST IN HTML YET
    browseBtn.on("click", (event) => {
        event.preventDefault();
        $.ajax({
            url: "/api/browse",
            method: "GET"
        }).then(res => {
            $("#api-response").text(JSON.stringify(res))
        })
    });

    searchBtn.on("click", (event) => {
        event.preventDefault();
        $.ajax({
            url: "/api/search",
            method: "GET"
        }).then(res => {
            $("#api-response").text(JSON.stringify(res))
        })
    });

    aboutBtn.on("click", () => {
        $.ajax({
            url: "/api/about",
            method: "GET"
        }).then(res => {
            $("#api-response").text(JSON.stringify(res))
        })
    });
    
})()
