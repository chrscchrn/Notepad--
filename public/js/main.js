
$(document).ready(() => {
    $.ajax({
        url: "/api/news/latest",
        method: "GET"
    }).then(res => {
        $("#api-response").text(JSON.stringify(res))
    })
})