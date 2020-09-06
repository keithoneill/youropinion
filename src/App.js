import React, { useState } from 'react';
import './App.css';
import SearchInput from './components/search/SearchInput';
import Article from './components/article/Article';



function App() {
const [articles, setArticles] = useState([]);

function getNews(e) {
  async function searchArticles() {
    var url = 'http://newsapi.org/v2/everything?' +
    'q=' +
    e.target.value +
    '&' +
    'from=2020-09-06&' +
    'sortBy=popularity&' +
    'apiKey=d071bbbfe8e04f14bee177be536fde78';
    const response = await fetch(url);
    if(response.ok){
        var req = new Request(url);
        fetch(req)
        // .then(function(response) {
        //     console.log(response.json());
        // })
        .then(response => response.json())
        // .then(data => {
        //   console.log(data.articles)
        // })
        .then(response => response.articles.map(article => (
            {
                source: `${article.source.name}`,
                author: `${article.author}`,
                title: `${article.title}`,
                description: `${article.description}`,
                image: `${article.urlToImage}`,
                date: `${article.publishedAt}`,
                content: `${article.content}`,
                url: `${article.url}`
            }
        )))
        
        .then(article => setArticles(article))
        .catch (error => console.log(error))
    }
  }
  searchArticles();
}

let news = articles.map((articles, i) => {
  if(articles === ''){
    return "Loading..."
  }
  else{
    return <Article key={i} source={articles.source} author={articles.author} title={articles.title} description={articles.description} image={articles.image} date={articles.date} content={articles.content} />
  }
})

  return (
    <div className="App">
      <SearchInput getNews={getNews} placeholder="Search News"/>
      { news }
    </div>
  );
}

export default App;
