import MovieList from "./MovieList";
import { useState, useEffect } from "react";

const TopMovies = () => {

    const [topMovies, setTopMovies] = useState([])
    
    useEffect(() => {
        fetch("https://imdb-api.com/API/AdvancedSearch/k_r5iljbbo?groups=top_100&count=100")
            .then(res => res.json())
            .then(data => setTopMovies(data.results))
    },[])


    return (
            <div className='row'>
                <MovieList movies={topMovies} />
            </div>
    )
    
}
 
export default TopMovies;