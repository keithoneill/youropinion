import React, { useState } from 'react';
import SearchInput from '../components/search/SearchInput';
import Article from '../components/article/Article';
import mediaBiasFactCheckData from '../components/data/mediaBiasFactCheckData.json';
import SearchFor from '../components/searchFor/SearchFor';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function TwoColumnNews() {
const [articles, setArticles] = useState([]);
const [value, setValue] = useState('');
const [searchFor, setSearch] = useState('');

const handleChange = event => {
  setValue(event.target.value);
};

const handleSubmit = event => {
  if (value) {
    getNews(value);
  }
  setSearch(value);
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
  async function fetchNews(){
    const result = await fetch(`https://api.cognitive.microsoft.com/bing/v7.0/news/search?count=100&freshness=day&textFormat=Raw&safeSearch=Off&q=${value}`, {
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
                source: cleanUpSource(article.provider[0].name),
                title: `${article.name}`,
                description: `${article.description}`,
                image: getImage(article.image),
                date: convertDate(article.datePublished),
                content: `${article.url}`,
                url: `${article.url}`,
                rating: getRating(article.url, article.provider[0].name)
            }
        )))
        .then(article => setArticles(article))
        .catch (error => console.log(error))
    }
  }
  fetchNews();
}

function getRating(url, name){
  let outlet = cleanUpSource(name).toLowerCase();
  for (let source of Object.keys(mediaBiasFactCheckData)) {
    var newsOutlet = mediaBiasFactCheckData[source];
    //console.log(url);
    if(url.includes(source)){
      return newsOutlet.b;
    }
    else if (newsOutlet.n.toLowerCase().includes(outlet)){
      
      return newsOutlet.b;
    }
  }
}

function cleanUpSource(source){
  let name = source.split(' on MSN.com').shift();
  return name;
}

function convertDate(date){
  let newDate = new Date(date);
  let year = newDate.getFullYear();
  let month = newDate.getMonth()+1;
  let day = newDate.getDate();

  return `${month}/${day}/${year}`;
}



let leftNews = articles.map((articles, i) => {
  if(articles === ''){
    return "Loading..."
  }
  else{
    if(articles.rating === undefined){
      console.log(`${articles.source} rating is not defined`)
      return null;
    }
    else if(articles.rating.includes('left')){
      return <Article key={i} source={articles.source} title={articles.title} description={articles.description} image={articles.image} date={articles.date} url={articles.url}/>
    }
    else{
      return null;
    }
  }
})
let rightNews = articles.map((articles, i) => {
  if(articles === ''){
    return "Loading..."
  }
  else{
    if(articles.rating === undefined){
      console.log(`${articles.source} rating is not defined`)
      return null;
    }
    else if(articles.rating.includes('right')){
      return <Article key={i} source={articles.source} title={articles.title} description={articles.description} image={articles.image} date={articles.date} url={articles.url}/>
    }
    else{
      return null;
    }
  }
})


    return (
    <Container fluid>
        <Row>
          <Col>
              <SearchInput handleChange={handleChange} handleSubmit={handleSubmit} placeholder="Search News"/>
              <SearchFor searchFor={searchFor} hasValue={searchFor}/>
          </Col>
        </Row>
        <Row>
        <Col style={styles.leftColumn}>
            { leftNews }
        </Col>
        <Col style={styles.rightColumn}>
            { rightNews }
        </Col>
        </Row>
    </Container>
    );
}

export default TwoColumnNews;

const styles={
  leftColumn:{
    backgroundColor: '#1d3557'
  },
  rightColumn:{
    backgroundColor: '#e63946'
  },
}