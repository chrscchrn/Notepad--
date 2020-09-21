(() => {
    
    function saveLocal() {
        localStorage.clear(); 
        let i = 1;
        
        $.get("/notesdata").then(res => {
            res.forEach( data => {
                localStorage.setItem(`article${i}`, JSON.stringify(data));
                i++;
            })
        }).catch(err => console.log(err));
    }

    $(function() {
        saveLocal();
    });
})()
