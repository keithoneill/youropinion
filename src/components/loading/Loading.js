import React from 'react';
import Spinner from 'react-bootstrap/Spinner';



function Loading(props){
    const hasValue = props.hasValue;
    if(hasValue !== ''){
    return(
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    )}
    else{
        return null;
    }
}

export default Loading