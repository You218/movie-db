import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchMovies = async (url) => {
        setLoading(true);
        try {
            const response = await axios.get(url);
            setMovies(response.data.results);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data: ", error);
            setLoading(false);
        }
    };

    return (
        <MovieContext.Provider value={{ movies, fetchMovies, loading }}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieContextProvider;
