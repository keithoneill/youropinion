import React from 'react';


function SearchFor(props) {
    const hasValue = props.hasValue;
    if(hasValue !== ''){
        return(
            <h1 style={styles.searchFor}>Displaying Recent News About {props.searchFor}</h1>
        )
    }
    else{
        return null;
    }

}
export default SearchFor
const styles={
    searchFor:{
        fontFamily: 'Cairo, sans-serif',
        src: 'url("https://fonts.googleapis.com/css2?family=Cairo")',
        lineHeight: '2rem',
        fontSize: '2rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#f1faee',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
}
