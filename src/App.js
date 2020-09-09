import React, { useState } from 'react';
import './App.css';
import SearchInput from './components/search/SearchInput';
import ArticleLeft from './components/article/ArticleLeft';
import ArticleRight from './components/article/ArticleRight';



function App() {
const [articles, setArticles] = useState([]);

function getNews(e) {
  async function searchArticles() {
    var url = 'http://newsapi.org/v2/everything?' +
    'q=' +
    e.target.value +
    '&' +
    'from=2020-08-10&' +
    'sources?language=en&' +
    'apiKey=d071bbbfe8e04f14bee177be536fde78';
    const response = await fetch(url);
    if(response.ok){
        var req = new Request(url);
        fetch(req)
        .then(response => response.json())
        .then(response => response.articles.map(article => (
            {
                source: `${article.source.name}`,
                author: `${article.author}`,
                title: `${article.title}`,
                description: `${article.description}`,
                image: `${article.urlToImage}`,
                date: `${article.publishedAt}`,
                content: `${article.content}`,
                url: `${article.url}`,
                lean: `${article.source.id}`
            }
        )))
        .then(article => setArticles(article))
        .catch (error => console.log(error))
    }
  }
  searchArticles();
}

function leaningLeft(source){
  switch (source) {
    case 'abc-news':
    case 'abc-news-au':
    case 'al-jazeera-english':
    case 'ars-technica':
    case 'axios':
    case 'bloomberg':
    case 'business-insider':
    case 'business-insider-uk':
    case 'buzzfeed':
    case 'cbc-news':
    case 'cbs-news':
    case 'cnn':
    case 'engadget':
    case 'entertainment-weekly':
    case 'google-news':
    case 'google-news-au':
    case 'google-news-ca':
    case 'google-news-in':
    case 'google-news-uk':
    case 'independent':
    case 'mashable':
    case 'msnbc':
    case 'nbc-news':
    case 'newsweek':
    case 'new-york-magazine':
    case 'politico':
    case 'polygon':
    case 'reddit-r-all':
    case 'rte':
    case 'the-hindu':
    case 'the-huffington-post':
    case 'the-irish-times':
    case 'the-next-web':
    case 'the-verge':
    case 'the-washington-post':
    case 'time':
    case 'vice-news':
      return true;
    case 'australian-financial-review':
    case 'breitbart-news':
    case 'financial-post':
    case 'fortune':
    case 'fox-news':
    case 'fox-sports':
    case 'national-review':
    case 'news-com-au':
    case 'the-american-conservative':
    case 'the-globe-and-mail':
    case 'the-times-of-india':
    case 'the-washington-times':
      return false;
    default:
      return null;
  }
}

let news = articles.map((articles, i) => {
  if(articles === ''){
    return "Loading..."
  }
  else{
    if(leaningLeft(articles.lean) === true ){
      return <ArticleLeft key={i} source={articles.source} author={articles.author} title={articles.title} description={articles.description} image={articles.image} date={articles.date} content={articles.content} />
    }
    else if(leaningLeft(articles.lean) === false){
      return <ArticleRight key={i} source={articles.source} author={articles.author} title={articles.title} description={articles.description} image={articles.image} date={articles.date} content={articles.content} />
    }
    else{
      return null
    }
    
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
