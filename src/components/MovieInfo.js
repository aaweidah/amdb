import React from "react";

const MovieInformation = (props) => {
    return (
        <div className='col'>
            <h1>{props.information}</h1>
        </div>
    )
}

export default MovieInformation