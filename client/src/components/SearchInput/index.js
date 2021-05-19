import React from "react";

function SearchInput() {
    return (
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Book's title" aria-label="Book's title" aria-describedby="button-addon" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon">Search</button>
            </div>
        </div>

    );
}

export default SearchInput;