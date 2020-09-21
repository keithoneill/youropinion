import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
//import Loading from '../loading/Loading';



function Article(props){
    return(
        <Card style={styles.article} key={props.id}>
            <Card.Img variant="top" src={props.image} style={styles.photo}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <small className="text-muted">
                    <cite title="Article Date">{props.date}</cite>
                </small>
                <Card.Text>
                {props.description}
                </Card.Text>
                <Button variant="secondary" a href={props.url}target="_blank">Go To Article</Button>
            </Card.Body>
            <footer className="blockquote-footer">
                <small className="text-muted">
                    <cite title="Source Title">{props.source}</cite>
                </small>
            </footer>
        </Card>
        
    )
}

export default Article

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