(() => {

    console.log("nothing in notes, maybe use local storage and query strings to edit the notes");
    localStorage.clear(); 
    let i = 1;

    $.get("/notes").then(res => {
        //iterate through all the users notes and set to storage for editing on work page
        res.forEach( data => {
            localStorage.setItem(`saved${i}`, JSON.stringify(data));
            
            i++;
        })
        

    }).catch(err => console.log(err));
})()