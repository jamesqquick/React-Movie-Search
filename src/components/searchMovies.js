import React, { useState } from 'react';
import MovieCard from './movieCard';

export default function SearchMovies() {
    const [query, setQuery] = useState(null);
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        } catch (err) {
            setError('Failed to fetch movies');
            setMovies([]);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="query" className="label">
                    Movie name
                </label>
                <input
                    type="text"
                    name="query"
                    value={query}
                    className="input"
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="i.e. Jurassic Park"
                />
                <button className="button" type="submit">
                    Search!
                </button>
            </form>
            {loading && <p className="flash info">Loading...</p>}
            {error && <p className="flash error">{error}</p>}
            {!loading && !error && (
                <div className="card-list">
                    {movies &&
                        movies
                            .filter((movie) => movie.poster_path)
                            .map((movie) => (
                                <MovieCard movie={movie} key={movie.id} />
                            ))}
                </div>
            )}
        </div>
    );
}
