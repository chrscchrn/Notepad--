const key = 'fd74db3423b5430780f46c67f89febb2';
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();   
let fullDay = `${year}-${month}-${day}`;
// var $articleHolder = $("#articles");

function axiosTest() {
    return axios.get(`http://newsapi.org/v2/everything?q=general&from=${fullDay}&sortBy=publishedAt&apiKey=${key}`)
    .then(response => {
        return response;
    })
}

(() => {
    axiosTest()
        .then(data => {
            for (let piece in data.data.articles) console.log(data.data.articles[piece]);
        }) 
})()