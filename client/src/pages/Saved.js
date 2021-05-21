import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Favorites from "../components/Favorites";
import API from "../utils/API";
import BookContext from "../utils/BookContext";

function Saved() {
    const [savedBooks, setSavedBooks] = useState([]);

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.getBooks()
            .then(res =>
                setSavedBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    return (
        <BookContext.Provider value={[savedBooks]}>
        <div>
            <Navbar />
            <Hero />
            <Favorites />
        </div>
        </BookContext.Provider>
    )
};


export default Saved;