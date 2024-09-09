import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Search = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Hook to access the current URL
    const location = useLocation();

    // Extract the search query from the URL
    const query = new URLSearchParams(location.search).get("query");

    // Fetch search results from the TMDb API
    useEffect(() => {
        const fetchSearchResults = async () => {
            if (query) {
                setLoading(true);
                try {
                    const response = await axios.get(
                        `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&query=${query}`
                    );
                    setSearchResults(response.data.results);
                    setError(null);
                } catch (error) {
                    setError("Something went wrong. -Please try again.");
                }
                setLoading(false);
            }
        };

        fetchSearchResults();
    }, [query]);

    return (
        <div>
            <h1>Search Results for: {query}</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : searchResults.length > 0 ? (
                <div className="movie-list">
                    {searchResults.map((movie) => (
                        <div key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <p>{movie.title}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No results found for "{query}".</p>
            )}
        </div>
    );
};

export default Search;
