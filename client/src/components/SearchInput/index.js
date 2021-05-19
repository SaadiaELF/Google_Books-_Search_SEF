import React from "react";
import Container from "../Container";

function SearchInput() {
    return (
        <Container>
            <p className="lead mb-4">Enter below the title of the book you want to look for : </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Book's title" aria-label="Book's title" aria-describedby="button-addon" />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon">Search</button>
                </div>
            </div>
        </Container>
    );
}

export default SearchInput;