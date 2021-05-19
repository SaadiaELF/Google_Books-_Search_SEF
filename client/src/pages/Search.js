import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import SearchInput from "../components/SearchInput";
function Search() {
    return (
        <div>
            <Navbar />
            <Hero />
            <SearchInput />
            <Results/>
            </div>
    )
};


export default Search;