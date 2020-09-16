const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('fd74db3423b5430780f46c67f89febb2');


newsapi.v2.everything({
    q: 'general',
    sources: 'bbc-news,the-verge',
    domains: 'bbc.co.uk, techcrunch.com',
    from: '2020-09-10',
    to: '2020-09-16',
    language: 'en',
    sortBy: 'relevancy',
    page: 2
}).then(response => {
    console.log(response.articles);

});
