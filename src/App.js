import React, { useState, useEffect } from 'react';
import './App.css';
import SearchInput from './components/search/SearchInput';
import Article from './components/article/Article';



function App() {
const [articles, setArticles] = useState([]);

useEffect(() => {
  async function searchArticles() {
    var url = 'http://newsapi.org/v2/everything?' +
    'q=Apple&' +
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
            }
        )))
        
        .then(article => setArticles(article))
        .catch (error => console.log(error))
    }
  }
  searchArticles();
}, []);

let news = articles.map((articles, i) => {
  if(articles === ''){
    return "Loading..."
  }
  else{
    return <Article key={i} source={articles.source} author={articles.author} title={articles.title} description={articles.description} image={articles.image} date={articles.date} content={articles.content} />
  }
})
function searchNews(search){
  return function(searchNewsTitle){
    try {
      return searchNewsTitle.pTitle.toLowerCase().includes(search.toLowerCase())
    } catch (error) {
      return !search
    }
  }
}
  return (
    <div className="App">
      <SearchInput placeholder="Search News"/>
      { news }
    </div>
  );
}

export default App;
