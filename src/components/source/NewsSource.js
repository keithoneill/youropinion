import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';



function NewsSource(props){
    return(
        <Card style={styles.article} key={props.id}>
            <Card.Body>
                <Card.Title>{props.source}</Card.Title>
                <Card.Text>
                Leaning:
                {props.bias}
                </Card.Text>
                <Card.Text>
                Factual Reporting: 
                {props.reporting}
                </Card.Text>
                <Button variant="secondary" a href={props.url}target="_blank">Visit News Site</Button>
            </Card.Body>
            <footer className="blockquote-footer">
                <Button variant="dark" a href={props.biasurl}target="_blank">Visit Bias Rating Site</Button>
            </footer>
        </Card>
        
    )
}

export default NewsSource

const styles={
    article:{
        width: '18rem',
        margin: 'auto',
        paddingBottom: '2rem',
        marginBottom: '2rem',
        marginTop: '2rem'
    },
    photo:{
        width: '45%',
        borderRadius: '3px',
        margin: 'auto',
        marginTop: '1rem'
    }
}