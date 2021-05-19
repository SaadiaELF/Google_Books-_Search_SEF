import React from "react";

function Hero() {
    return (
        <div className="container my-5">
            <div className="px-4 py-5 my-5 text-center align-items-center rounded-3 border shadow-lg">
                <i className="fas fa-book fa-7x"></i>
                <h1 className="display-5 fw-bold mt-3 mb-4">Google Books Search</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Search for and Save Books of Interest </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Book's title" aria-label="Book's title" aria-describedby="button-addon" />
                            <button className="btn btn-outline-secondary" type="button" id="button-addon">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;