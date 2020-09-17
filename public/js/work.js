(() => {
// getNote();

var $title = $("#noteTitle");
var $body = $("#noteBody");
var $saveButton = $("#save")

$($saveButton).on("click", save);

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