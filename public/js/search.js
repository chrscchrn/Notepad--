
const key = 'fd74db3423b5430780f46c67f89febb2';
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();   
let fullDay = `${year}-${month}-${day}`;
const $searchButton = $("#searchButton");
// const $resultsDiv = $("#results");

function axiosTest() {
    return axios.get(`http://newsapi.org/v2/everything?q=general&from=${fullDay}&sortBy=publishedAt&apiKey=${key}`)
    .then(response => {
        return response;
    })
}

(() => {
    $searchButton.on("click", () => {
        axiosTest()
            .then(data => {
                console.log(data.data.articles);
                $("#results").text(data.data.articles[0].title);
            })   
        
    });
})()
