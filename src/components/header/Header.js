import React from 'react';
import logo from '../../images/logo192.png';



function Header() {

    return(
        <header style={styles.header}>
            <img src={logo} alt="YourOpinionLogo" style={styles.logo} />
            <h1 style={styles.h1}>Your Opinion</h1>
        </header>
    )
}

export default Header

const styles={
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        background: '#f1faee',
        
    },
    h1:{
        fontFamily: 'Cairo, sans-serif',
        src: 'url("https://fonts.googleapis.com/css2?family=Cairo")',
        fontSize: '3rem',
        color: '#060C0E',
        marginLeft: 'auto',
        paddingRight: '3.5rem',
        marginRight: 'auto'
    },
    logo:{
        height: '3.5rem',
        paddingLeft: '2rem',
        marginTop: '1rem',
        marginBottom: '1rem'
    },
    ul:{
        display: 'flex',
        flexDirection: 'row'
    }
}