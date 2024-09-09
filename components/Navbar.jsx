// src/components/Navbar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            navigate(`/search?query=${search}`);
        }
    };

    return (
        <nav>
            <Link to="/">Popular</Link>
            <Link to="/top-rated">Top Rated</Link>
            <Link to="/upcoming">Upcoming</Link>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Movies..."
                />
                <button type="submit">Search</button>
            </form>
        </nav>
    );
};

export default Navbar;
