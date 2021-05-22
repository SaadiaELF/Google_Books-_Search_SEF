import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import SearchInput from "../components/SearchInput";
import API from "../utils/API";
import BookContext from "../utils/BookContext"

function Search() {

    // UseState hook to store list of results
    const [books, setBooks] = useState([]);
    // UseState Hook to store search term
    const [search, setSearch] = useState("Harry Potter");

    // UseEffect to call the API url and store results
    useEffect(() => {
        if (!search) {
            return;
        }
        API.search(search)
            .then(books => {
                setBooks(books);
            })
            .catch(err => console.log(err));
    }, [search]);

    const handleInputChange = event => {
        setSearch(event.target.value);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        setSearch(event.target.value);
    };


    return (
        <BookContext.Provider value={[books]}>
            <div>
                <Navbar />
                <Hero />
                <SearchInput
                    handleFormSubmit={handleFormSubmit}
                    handleInputChange={handleInputChange}
                    results={search}
                />
                <Results />
            </div>
        </BookContext.Provider>
    )
};


export default Search;