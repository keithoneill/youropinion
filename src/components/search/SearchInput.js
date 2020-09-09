import React from 'react';
import { GrSearch } from 'react-icons/gr';


const SearchInput = props => {
    return(
        <div style={styles.searching}>
            <form style={styles.form}>
                <GrSearch style={styles.icon} />
                <input type="text" onSubmit={props.getNews} style={styles.input} placeholder={props.placeholder}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SearchInput

const styles={
    form:{
        display: 'inline-block',
        padding: '.5rem',
        position: 'relative',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    input:{
        border: 'solid 2px',
        margin: '2rem',
        width: '45vw',
        padding: '2rem 0rem 2rem 2rem'
    },
    icon:{
        marginLeft: '2rem',
        marginTop: '4rem',
        position: 'absolute',
        paddingLeft: '.5rem'
    },
    searching:{
        display: 'flex',
        top: '1rem',
        left: '0',
        right: '4rem'
    }
}