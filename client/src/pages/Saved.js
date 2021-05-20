import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Favorites from "../components/Favorites";
import BookContext from "../utils/BookContext";

function Saved() {
    return (
        <BookContext.Provider value={book}>
            <div>
                <Navbar />
                <Hero />
                <Favorites />
            </div>
        </BookContext.Provider>
    )
};


export default Saved;