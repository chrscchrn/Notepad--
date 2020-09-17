$(document).ready(() => {
    $.ajax({
        url: "/api/news/latest",
        method: "GET"
    }).then(res => {
        $("#api-response").text(JSON.stringify(res))
    })

    $.ajax({
        url: "/browse",
        method: "GET"
    }).then(res => {
        $("#api-response").text(JSON.stringify(res))
    })


    $.ajax({
        url: "/login",
        method: "GET"
    }).then(res => {
        $("#api-response").text(JSON.stringify(res))
    })

    $.ajax({
        url: "/signup",
        method: "GET"
    }).then(res => {
        $("#api-response").text(JSON.stringify(res))
    })

    $.ajax({
        url: "/search",
        method: "GET"
    }).then(res => {
        $("#api-response").text(JSON.stringify(res))
    })
})





