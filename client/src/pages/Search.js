import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import SearchInput from "../components/SearchInput";
import Alert from "../components/Alert"
import API from "../utils/API";
import BookContext from "../utils/BookContext"

function Search() {

    const [book, setBook] = useState({
        title: "",
        subtitle: "",
        authors: "",
        image: "",
        description: ""
    });
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (!search) {
            return;
        }
        API.search(search)
            .then(res => {
                if (res.data.length === 0) {
                    throw new Error("No results found.");
                }
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                setBook({
                    title: res.data.items[0].volumeInfo.title,
                    subtitle: res.data.items[0].volumeInfo.subtitle,
                    authors: res.data.items[0].volumeInfo.authors,
                    image: res.data.items[0].volumeInfo.imageLinks.smallThumbnail,
                    description: res.data.items[0].volumeInfo.description
                });
            })
            .catch(err => setError(err));
    }, [search]);

    const handleInputChange = event => {
        setSearch(event.target.value);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
    };

    return (
        <BookContext.Provider value={book}>
            <div>
                <Navbar />
                <Hero />
                <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 5 }}>
                    {error}
                </Alert>
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