<<<<<<< HEAD
const elements = Array.from(document.querySelectorAll('.fill'));

function fill(item, index) {
  
  const bgColor = getComputedStyle(item).backgroundColor,
  fillLayer = document.createElement('div');
  fillLayer.classList.add('fill-layer');
  item.style.backgroundColor = 'transparent';
  item.style.position = 'relative';
  item.style.overflow = 'hidden';
  setTimeout(function() {
    fillLayer.style.backgroundColor = bgColor;  
    item.appendChild(fillLayer);
  }, index * 1000);
  
}

elements.forEach(fill);
=======
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
>>>>>>> ef677b6f7da58428956abe330bc51691ea9bb91a
