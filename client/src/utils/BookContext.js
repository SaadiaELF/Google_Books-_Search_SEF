import React from "react";

const BookContext = React.createContext({
    id : "",
    title: "",
    subtitle: "",
    authors: [],
    image: "",
    description: "",
    link : ""
});

export default BookContext;
