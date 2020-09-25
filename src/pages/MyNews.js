import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchInput from '../components/search/SearchInput';
import SearchFor from '../components/searchFor/SearchFor';
import mediaBiasFactCheckData from '../components/data/mediaBiasFactCheckData.json';
import NewsSource from '../components/source/NewsSource';
import Loading from '../components/loading/Loading';

function MyNews(){
const [source, setSource] = useState([]);
const [value, setValue] = useState('');
const [searchFor, setSearch] = useState('');

const handleChange = event => {
    setValue(event.target.value);
    };
    
    const handleSubmit = event => {
    event.preventDefault();
    if (value) {
        getNewsSource(value);
    }
    setSearch(value);
    setValue('');
    
    };

function getNewsSource(name){
    let outlet = name.toLowerCase();
    for (const [source] of Object.entries(mediaBiasFactCheckData)) {
        var newsOutlet = mediaBiasFactCheckData[source];
        if (newsOutlet.n.toLowerCase().includes(outlet)){
            let sources = Array.from(Object.entries(newsOutlet));
            console.log(sources);
        let results = sources.map(source =>(
            {              
                name: `${source[1]}`,
                leaning: `${source[0]}`,
                url: `${source[4]}`,
                factualReporting: `${source[9]}`,
                mediaBiasUrl: `${source[8]}`
            }
        ))
        setSource(results);
        console.log(results);
        }
    }
}
let sourceData = source.map((source, i) => {
    if(source === ''){
    return <Loading/>
    }
    else{
        if(source !== ''){
        return <NewsSource key={i} source={source.name} bias={source.leaning} url={source.url} biasurl={source.mediaBiasUrl} reporting={source.factualReporting}/>
        }
        else{
        return null;
    }
    }
})


    return(
        <Container>
            <Row>
                <Col style={styles.col}>
                    <h1>Your Opinion</h1>
                    <h2>Where Does Your News Lean?</h2>
                    <p>Want to know where your news source leans? Just search it below</p>
                    <SearchInput handleChange={handleChange} handleSubmit={handleSubmit} placeholder="Search For A News Source"/>
                </Col>
                <Row>
                    <Col>
                        <SearchFor searchFor={searchFor} hasValue={searchFor} />
                        {sourceData}
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}

export default MyNews

const styles={
    col:{
        color: '#F3F5F6',
        paddingTop: '2rem'
    }
}