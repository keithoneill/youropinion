import React from 'react';


function Article(props){   
    return(
        <article key={props.id} >
            <div style={styles.article}>
                <header style={styles.header}>
                    <h1 style={styles.title}>{props.title}</h1>
                    <img style={styles.photo} src={props.image} alt={props.title} />    
                </header>
                <section style={styles.info}>
                    <h3 style={styles.h3}>{props.source}</h3>        
                    <p style={styles.p}>{props.description}</p>
                    <h3 style={styles.p}>{props.date}</h3>
                </section>
            </div>
        </article>
    )
}

export default Article

const styles={
    article:{
        paddingTop: '3rem',
        display: 'flex',
        flexDirection: 'column'
    },
    header:{
        display: 'inline-block',
        justifyContent: 'center',
        background: '#e5e5e5',
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '10px 10px 0 0',
        marginTop: '3rem'
    },
    h3:{
        fontFamily: 'Inder, sans-serif',
        src: 'url("https://fonts.googleapis.com/css2?family=Inder")',
        fontSize: '1.5rem',
        margin: '2.5rem 0 3rem 3rem',
    },
    info:{
        justifyContent: 'center',
        background: '#e5e5e5',
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '0 0 10px 10px'
    },
    photo:{
        display: 'block',
        justifyContent: 'center',
        width: '40%',
        height: '20%',
        margin: 'auto'
    },
    title:{
        fontFamily: 'Cairo, sans-serif',
        src: 'url("https://fonts.googleapis.com/css2?family=Cairo")',
        lineHeight: '2.3rem',
        fontSize: '2rem',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    p:{
        fontFamily: 'Tenor Sans, sans-serif',
        src: 'url("https://fonts.googleapis.com/css2?family=Tenor+Sans")',
        display: 'block',
        textAlign: 'left',
        margin: '2.5rem 3rem 3rem 3rem',
        color: '#060C0E',
        fontSize: '1.2rem'
    }
}