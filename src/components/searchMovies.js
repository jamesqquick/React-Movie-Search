import React, { useState, useEffect } from 'react';

export default function SearchMovies() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('trying to submit', query);

        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
        console.log(data);
    };
    return (
        <div>
            <h2>Search For a Movie</h2>
            <form onSubmit={handleSubmit}>
                {/* <label htmlFor="query">Query</label> */}
                <input
                    type="text"
                    name="query"
                    id="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Watcha looking for?"
                />
                <button type="submit">Search!</button>
            </form>
            <div className="card-list">
                {movies &&
                    movies.map((movie) => (
                        <div className="card" key={movie.id}>
                            <img
                                className="card--image"
                                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                                alt=""
                            />
                            <div className="card--content">
                                <h3 className="card--title">{movie.title}</h3>
                                <small>
                                    RELEASE DATE: {movie.release_date}
                                </small>{' '}
                                |<small>RATING: {movie.vote_average}</small>
                                <p className="card--desc">{movie.overview}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
