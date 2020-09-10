import React, { useState, useEffect } from 'react';
import './App.css';
import SearchInput from './components/search/SearchInput';
import ArticleLeft from './components/article/ArticleLeft';
//import ArticleRight from './components/article/ArticleRight';
import allsidesData from './components/data/allsidesData.json'



function App() {
const [articles, setArticles] = useState([]);
const [value, setValue] = useState('');
const [data, setData] = useState([]);

useEffect(() => {
  const ratingData = allsidesData.map(ratingData => ({
    source: `${ratingData.news_source}`,
    rating: `${ratingData.rating}`
  }))
  setData({data: ratingData})
},[]);

const handleChange = event => {
  setValue(event.target.value);
};

const handleSubmit = event => {
  if (value) {
    getNews(value);
  }
  setValue('');

  event.preventDefault();
};

function getImage(image){
  if(typeof image === 'undefined'){
    return 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80  '
  }
  else{
    return image.thumbnail.contentUrl;
  }
}

function getNews() {
  async function fetchNews(){
    const result = await fetch(`https://api.cognitive.microsoft.com/bing/v7.0/news/search?count=100&freshness=Day&textFormat=Raw&safeSearch=Off&q=${value}`, {
      "method": "GET",
      "headers": {
        "Ocp-Apim-Subscription-Key": "fea5f0d614de4784b07bf08c6ac387a6",
        "Accept": "application/json",
      }
      });
    if(result.ok){
      fetch(`https://api.cognitive.microsoft.com/bing/v7.0/news/search?count=100&freshness=Day&textFormat=Raw&safeSearch=Off&q=${value}`, {
        "method": "GET",
        "headers": {
          "Ocp-Apim-Subscription-Key": "fea5f0d614de4784b07bf08c6ac387a6",
          "Accept": "application/json",
        }
        })
        .then(response => response.json())
        .then(response => response.value.map(article => (
            {
                source: `${article.provider[0].name}`,
                title: `${article.name}`,
                description: `${article.description}`,
                image: getImage(article.image),
                date: `${article.datePublished}`,
                content: `${article.url}`,
                url: `${article.url}`,
                rating: getRating(article.provider[0].name)
            }
        )))
        .then(article => setArticles(article))
        .catch (error => console.log(error))
    }
  }
  fetchNews();
}

function getRating(source){
  if(source.includes(data.source)){
    return data.rating
  }
  else{
    return 'not rated'
  }
}

let news = articles.map((articles, i) => {
  if(articles === ''){
    return "Loading..."
  }
  else{
    return <ArticleLeft key={i} source={articles.source} author={articles.rating} title={articles.title} description={articles.description} image={articles.image} date={articles.date} content={articles.content} />
  }
})

  return (
    <div className="App">
      <SearchInput handleChange={handleChange} handleSubmit={handleSubmit} placeholder="Search News"/>
      { news }
    </div>
  );
}

export default App;
