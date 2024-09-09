import React, { useEffect, useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { Link } from "react-router-dom";

const HomePage = () => {
    const { movies, fetchMovies, loading } = useContext(MovieContext);

    useEffect(() => {
        fetchMovies(
            `https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743`
        );
    }, []);

    return (
        <div>
            <h1>Popular Movies</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="movie-list">
                    {movies.map((movie) => (
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
            )}
        </div>
    );
};

export default HomePage;
