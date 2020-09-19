(() => {
// getNote();

function getUrl()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
let articleNum = getUrl();

let article = localStorage.getItem(`article${articleNum.num}`) //string
console.log(article);




var $title = $("#noteTitle");
var $body = $("#noteBody");
var $saveButton = $("#save")

$($saveButton).on("click", save);

//get from local storage then clear it

function save(event) {
    event.preventDefault();
    var note = {
        title: $title.val().trim(),
        body: $body.val().trim()
    };
    $.post("/api/notes", note); //put getNote at the end if the text area goes blank when running
}

// function getNote() { //not too sure about the route but need to edit later and confirm
//     $.get("/api/notes/:id", (data) => {
//         note = data;
//     });
// }

})()

// do this route last since it will need to be either loaded from /notes or brought up when an article is selected