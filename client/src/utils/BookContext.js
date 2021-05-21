import React from "react";

const BookContext = React.createContext({
    title: "",
    subtitle: "",
    authors: [],
    image: "",
    description: "",
    link : ""
});

export default BookContext;
