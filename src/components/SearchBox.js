import React from "react";
import { useState } from "react";

const SearchBox = ({setMovies}) => {

    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async (searchValue) =>{
        const url = `https://imdb-api.com/en/API/Search/k_r5iljbbo/${searchValue}`
    
        const response = await fetch(url);
        const responseJson = await response.json();
        if(responseJson.results){ // här kollar vi ifall resultaten från min Json fil är rätt
          setMovies(responseJson.results); //Ifall det är rätt resultat då lägger jag värdet på setMovies
        }
    }

    return (
        <div className="d-flex justify-content-center mb-5">
                <input
                onKeyPress={(event) => event.key === "Enter" && getMovieRequest(searchValue)} //Denna bestämmer att funktionen ska endast köras ifall det blir en enterklick
                className="row-3 form-control mr-sm-2 sokfelt"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder ='Search for a movie'
                ></input>
                <button type="button" className="btn btn-outline-warning my-2 my-sm-0" onClick={() => getMovieRequest(searchValue)}>Sök</button> {/* Sök knapp för att köra resultaten */}
        </div>
    )
}

export default SearchBox;