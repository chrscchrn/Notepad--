const swup = new Swup();
(() => {
    $.get("/api/user_data").then(data => {
        $(".member-name").text(data.email);
    });

})()
