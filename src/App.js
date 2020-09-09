import React, { useState } from 'react';
import './App.css';
import SearchInput from './components/search/SearchInput';
import ArticleLeft from './components/article/ArticleLeft';
//import ArticleRight from './components/article/ArticleRight';



function App() {
const [articles, setArticles] = useState([]);
const [value, setValue] = useState('');

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
    return 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80'
  }
  else{
    return image.thumbnail.contentUrl;
  }
}

function getNews() {
  //e.preventDefault();
  fetch(`https://api.cognitive.microsoft.com/bing/v7.0/news/search?count=100&freshness=Day&textFormat=Raw&safeSearch=Off&q=${value}`, {
    "method": "GET",
    "headers": {
      "Ocp-Apim-Subscription-Key": "fea5f0d614de4784b07bf08c6ac387a6",
      "Accept": "application/json"
    }
    })
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(response => response.value.map(article => (
        {
            source: `${article.provider[0].name}`,
            title: `${article.name}`,
            description: `${article.description}`,
            image: getImage(article.image),
            date: `${article.datePublished}`,
            content: `${article.url}`,
            url: `${article.url}`
        }
    )))
    .then(article => setArticles(article))
    .catch (error => console.log(error))
}


// function leaningLeft(source){
//   switch (source) {
//     case 'abc-news':
//     case 'abc-news-au':
//     case 'al-jazeera-english':
//     case 'ars-technica':
//     case 'axios':
//     case 'bloomberg':
//     case 'business-insider':
//     case 'business-insider-uk':
//     case 'buzzfeed':
//     case 'cbc-news':
//     case 'cbs-news':
//     case 'cnn':
//     case 'engadget':
//     case 'entertainment-weekly':
//     case 'google-news':
//     case 'google-news-au':
//     case 'google-news-ca':
//     case 'google-news-in':
//     case 'google-news-uk':
//     case 'independent':
//     case 'mashable':
//     case 'msnbc':
//     case 'nbc-news':
//     case 'newsweek':
//     case 'new-york-magazine':
//     case 'politico':
//     case 'polygon':
//     case 'reddit-r-all':
//     case 'rte':
//     case 'the-hindu':
//     case 'the-huffington-post':
//     case 'the-irish-times':
//     case 'the-next-web':
//     case 'the-verge':
//     case 'the-washington-post':
//     case 'time':
//     case 'vice-news':
//       return true;
//     case 'australian-financial-review':
//     case 'breitbart-news':
//     case 'financial-post':
//     case 'fortune':
//     case 'fox-news':
//     case 'fox-sports':
//     case 'national-review':
//     case 'news-com-au':
//     case 'the-american-conservative':
//     case 'the-globe-and-mail':
//     case 'the-times-of-india':
//     case 'the-washington-times':
//       return false;
//     default:
//       return null;
//   }
// }

let news = articles.map((articles, i) => {
  if(articles === ''){
    return "Loading..."
  }
  else{
    return <ArticleLeft key={i} source={articles.source} author={articles.author} title={articles.title} description={articles.description} image={articles.image} date={articles.date} content={articles.content} />
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
