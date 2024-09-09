import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import HomePage from "../pages/HomePage.jsx";
import MovieDetailPage from "../pages/MovieDetailPage.jsx";
import TopRatedPage from "../pages/TopRatedPage.jsx";
import MovieContextProvider from "../context/MovieContext.jsx";
import UpcomingPage from "../pages/UpcomingPage.jsx";
import Search from "../pages/Search.jsx";

const App = () => {
    return (
        <MovieContextProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/top-rated" element={<TopRatedPage />} />
                    <Route path="/upcoming" element={<UpcomingPage />} />
                    <Route path="/movie/:id" element={<MovieDetailPage />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
            </Router>
        </MovieContextProvider>
    );
};

export default App;
