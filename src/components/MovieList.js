import React from 'react';

const MovieList = ({movies}) => {
    return (
        <>
            {movies.map((movie, index) => (
                <div key={index} className='col-xl-3 col-12 col-lg-4 col-sm-6'>
                        <div className="table table-hover table-background d-flex justify-content-center" key={movie.id}>
                            {/* <div className='bodyBackground'> */}
                                <div className='card'>
                                    <a href={`https://www.imdb.com/title/${movie.id}/?ref_=tt_sims_tt_i_1`}><img className='img-background card-img-top m-auto' src={movie.image} alt ='movie'></img></a>

                                    <div className='card-body'>
{/*                                  <h5 className='col-6'> Title of the movie:<br/></h5> */}
                                        <h6 className='card-text m-auto'>{movie.title}</h6>
                                    {/* <h5 className='col-6'>Year: <br/></h5> */}
                                        <h6 className='col-4'>{movie.description}</h6>
                                    </div>
                                </div>
                            {/* </div> */}
                        </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;