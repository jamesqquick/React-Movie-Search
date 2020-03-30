import React from 'react';
import './App.css';
import SearchMovies from './components/searchMovies';

function App() {
    return (
        <div className="App">
            <div className="container">
                <h1 className="text-center">REACT MOVIE SEARCH</h1>
                <SearchMovies />
            </div>
        </div>
    );
}

export default App;
