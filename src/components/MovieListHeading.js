import React from "react";

const MovieListHeading = (props) => {
    return (
        <div className=''>
            <a className="headerText" href="/">{props.heading}</a>
            {/* <h1 className="headerText">{props.heading}</h1> */}
        </div>
    )
}

export default MovieListHeading