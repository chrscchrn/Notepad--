(() => {
    // const searchButton = $("");
    // const keyword = $("");
    // const  = $("");

    const axios = require("axios");
    let date = new Date();
    // let date2 = new Date(date.setDate(date.getDate()));
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let fullDay = `${year}-${month}-${day}`;
    console.log(fullDay);

    try {
        const results = axios.get(`http://newsapi.org/v2/everything?q=bitcoin&from=${fullDay}&sortBy=publishedAt&apiKey=${process.env.API_KEY}`)
        console.log(results);
        res.json({ data: results.data })
    }
    catch (data) { console.log(data) }


    // const NewsAPI = require('newsapi');
    // const newsapi = new NewsAPI('fd74db3423b5430780f46c67f89febb2');

    // app.get("/api/search", async (req, res) => {
    //     newsapi.v2.topHeadlines({
    //         sources: 'bbc-news,the-verge',
    //         q: 'business',
    //         category: 'general',
    //         language: 'en',
    //         country: 'us'
    //     }).then(results => {
    //         console.log(results);
    //         res.json({ data: results.data });
    //     });
    // });
    
})()