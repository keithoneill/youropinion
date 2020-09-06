import React from 'react';

const Article = props => {   
    return(
        <li key={props.id}>
        <div style={styles.article}>
            <header style={styles.header}>
                <h1 style={styles.title}>{props.title}</h1>              
            </header>
            <section style={styles.info}>
                <img style={styles.photo} src={props.image} alt="Article" />
                <p style={styles.p}><h3>{props.description}</h3></p>
                <p style={styles.p}><h3>{props.content}</h3></p>
                <p style={styles.p}><h3>{props.source}</h3></p>
                <p style={styles.p}><h3>{props.author}</h3></p>
                <p style={styles.p}><h3>{props.date}</h3></p>
            </section>
        </div>
        </li>
    )
    
}

export default Article

const styles={
    article:{
        paddingTop: '5rem',
        display: 'flex',
        flexDirection: 'column'
    },
    header:{
        display: 'inline-block',
        justifyContent: 'center',
        background: '#edf2f4',
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '10px 10px 0 0',
        marginTop: '3rem'
    },
    info:{
        justifyContent: 'center',
        background: '#edf2f4',
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '0 0 10px 10px',
    },
    li:{
        display: 'inline'
    },
    photo:{
        width: '9rem',
        heigh: '20rem',
        float: 'left',
        margin: '.8rem'
    },
    title:{
        width: '50%',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    p:{
        textAlign: 'left',
        margin: '2.5rem 0 3rem 3rem',
        color: 'black'
    }
}