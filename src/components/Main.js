// import React, { useState } from "react";
import MovieList from "./MovieList";
import SearchBox from "./SearchBox";

const Main = ({movies, setMovies}) => {

    return (
            <div className='row'>
                <SearchBox setMovies={setMovies} to="/movies"/>
                <MovieList movies={movies} />
            </div>
    )
    
}

export default Main;