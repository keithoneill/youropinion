import React from 'react';


const ArticleLeft = props => {   
    return(
        <li key={props.id} >
        <div style={styles.article}>
            <header style={styles.header}>
                <h1 style={styles.title}>{props.title}</h1>
                <img style={styles.photo} src={props.image} alt={props.title} />    
            </header>
            <section style={styles.info}>            
                <h3 style={styles.p}>{props.description}</h3>
                <h3 style={styles.p}>{props.content}</h3>
                <h3 style={styles.p}>{props.source}</h3>
                <h3 style={styles.p}>{props.author}</h3>
                <h3 style={styles.p}>{props.date}</h3>
            </section>
        </div>
        </li>
    )
    
}

export default ArticleLeft

const styles={
    article:{
        float: 'left',
        paddingTop: '3rem',
        display: 'flex',
        flexDirection: 'column'
    },
    header:{
        display: 'inline-block',
        justifyContent: 'center',
        background: 'blue',
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
        display: 'block',
        justifyContent: 'center',
        width: '75%',
        margin: 'auto',
        cursor: 'pointer'
    },
    title:{
        width: '50%',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    p:{
        display: 'block',
        textAlign: 'left',
        margin: '2.5rem 0 3rem 3rem',
        color: 'black'
    }
}