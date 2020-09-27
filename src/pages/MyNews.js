import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchInput from '../components/search/SearchInput';
import SearchFor from '../components/searchFor/SearchFor';
import mediaBiasFactCheckData from '../components/data/mediaBiasFactCheckData.json';
import NewsSource from '../components/source/NewsSource';

function MyNews(){
const [source, setSource] = useState([]);
const [value, setValue] = useState('');
const [searchFor, setSearch] = useState('');
const isArray = checkArray();

const handleChange = event => {
    setValue(event.target.value);
    };
    
    const handleSubmit = event => {    
    if (value) {
        getNewsSource(value);
    }
    setSearch(value);
    setValue('');
    event.preventDefault();    
    };

    function checkArray(){
        if(Array.isArray(source)){
            return true;
        }
        else{
            return false;
        }
    }

function getNewsSource(name){
    setSource('');
    let outlet = name.toLowerCase();
    var newsOutlet = Object.keys(mediaBiasFactCheckData).map(function(key) {
        return mediaBiasFactCheckData[key]
    });
    for (let [value] of Object.entries(newsOutlet)) {
        var sources = []
        sources.push(newsOutlet[value])
        if (sources[0].n.toLowerCase().includes(outlet)){  
        let newsSource = sources.map(source =>(
            {              
                name: `${source.n}`,
                leaning: `${source.b}`,
                url: `${source.h}`,
                factualReporting: `${source.r}`,
                mediaBiasUrl: `${source.u}`
            }
        ))
        setSource(source => [...source, newsSource]);
        }
    }
}

function SourceData(){
    return (
        source.map(source => <Col><NewsSource key={source} source={source[0].name} bias={source[0].leaning} url={source[0].url} biasurl={source[0].mediaBiasUrl} reporting={source[0].factualReporting}/></Col>)
    )
}


function NoData(){
    return (
    <SearchFor searchFor={searchFor} hasValue={searchFor} display={'No News Outlets Containing'}/>
    )
} 

    return(
        <Container>
            <Row>
                <Col style={styles.col}>
                    <h1>Your Opinion</h1>
                    <h2>Where Does Your News Lean?</h2>
                    <p>Want to know where your news source leans? Just search it below.</p>
                    <SearchInput handleChange={handleChange} handleSubmit={handleSubmit} placeholder="Search For A News Source"/>
                </Col>
                    <Row>
                        {isArray ? SourceData() : NoData()}
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