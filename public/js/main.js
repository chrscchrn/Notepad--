(() => {
    $.get("/api/user_data").then(data => {
        $(".member-name").text(data.email);
    });

    //Notepaper background will move slower than content
    var parallax = document.querySelectorAll("html"), speed = 0.95;
    window.onscroll = () => {
        [].slice.call(parallax).forEach((el, i) => {
        var windowYOffset = window.pageYOffset,
        elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
        el.style.backgroundPosition = elBackgrounPos;
        });
    };
      
})()
