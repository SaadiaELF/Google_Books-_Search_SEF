import React from "react";
import Container from "../Container";

function SearchInput(props) {
    return (
        <Container>
            <form className="search">
                <h3>Book Search</h3>
                <p className="lead mb-4">Enter below the title of the book you want to look for : </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <div className="input-group mb-3">
                        <input
                            value={props.search}
                            onChange={props.handleInputChange}
                            name="term"
                            list="term"
                            id="term"
                            type="text"
                            className="form-control"
                            placeholder="Book's title"
                            aria-label="Book's title"
                            aria-describedby="button-addon"
                        />
                        <button onClick={props.handleInputSubmit} className="btn btn-outline-secondary" type="button" id="button-addon">Search</button>
                    </div>
                </div>
            </form>
        </Container>
    );
}

export default SearchInput;