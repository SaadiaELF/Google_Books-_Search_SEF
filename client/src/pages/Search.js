import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import SearchInput from "../components/SearchInput";
import API from "../utils/API";

function Search() {

    const [book, setBook] = useState({
        title: "",
        subtitle: "",
        authors: "",
        image: "",
        description: ""
    });

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
                    image: res.data.items[0].imageLinks.smallThumbnail,
                    description: res.data.items[0].description
                });
            })
            .catch(err => setError(err));
    }, [search]);

    return (
        <div>
            <Navbar />
            <Hero />
            <SearchInput />
            <Results />
        </div>
    )
};


export default Search;