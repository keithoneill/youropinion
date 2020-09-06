import React from 'react';
import './MainBtn.css';

const MainBtn = props =>{
    return(
        <button className="postBtn" style={styles.mainBtn}>
            {props.btnText}
        </button>
    )
}

export default MainBtn

const styles= {
    mainBtn: {
        padding: '.5rem 3rem .5rem 3rem',
        fontSize: '1.25rem',
        cursor: 'pointer',
        borderRadius: '5px'
    }
}