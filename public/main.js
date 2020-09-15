
$(document).ready(() => {
    $.ajax({
        url: "/api/test",
        method: "GET"
    }).then(res => {
        $("#api-response").text(JSON.stringify(res))
    })
})