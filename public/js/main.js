(() => {
    const $browseBtn = $("#browse");
    const $searchBtn = $("#search");
    const $aboutBtn = $("#about");
    const $notesBtn = $("#notes");

    $.get("/api/user_data").then(data => {
        $(".member-name").text(data.email);
    });
    
    // goodgood
   $browseBtn.on("click", (event) => {
        event.preventDefault();
        $.ajax({
            url: "/browse",
            method: "GET"
        }).then(() => {
            window.location.replace("/browse");
        })
    });

    //goodgood
    $searchBtn.on("click", (event) => {
        event.preventDefault();
        console.log("search 1");
        $.ajax({
            url: "/search",
            method: "GET"
        }).then(() => {
            window.location.replace("/search");
        })
    });

    //goodgood
    $aboutBtn.on("click", () => {
        $.ajax({
            url: "/about",
            method: "GET"
        }).then(() => {
            window.location.replace("/about");
        })
    });

    //
    $notesBtn.on("click", () => {
        $.ajax({
            url: "/notes",
            method: "GET"
        }).then(() => {
            window.location.replace("/notes");
        })
    });
})()
