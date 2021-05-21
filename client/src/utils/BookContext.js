import React from "react";

const BookContext = React.createContext({
    title: "",
    subtitle: "",
    authors: [],
    image: "",
    description: ""
});

export default BookContext;
