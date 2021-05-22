import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Favorites from "../components/Favorites";
import API from "../utils/API";
import BookContext from "../utils/BookContext";

function Saved() {
    const [savedBooks, setSavedBooks] = useState([]);

    // Load all books and store them with setSavedBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Reloads books from the db
    function loadBooks() {
        API.getBooks()
            .then(res =>
                setSavedBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(event) {
        const id = event.target.value;
        console.log('ok1')
        API.deleteBook(id)
            .then(res => loadBooks())
            .then( console.log('ok2'))
            .catch(err => console.log(err));
    }

    return (
        <BookContext.Provider value={[savedBooks]}>
            <div>
                <Navbar />
                <Hero />
                <Favorites onClick ={deleteBook}/>
            </div>
        </BookContext.Provider>
    )
};


export default Saved;